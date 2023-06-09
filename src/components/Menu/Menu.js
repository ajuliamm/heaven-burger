import React, { useState, useEffect } from 'react';
import { Container, DivFlex, H1, List } from './Styles';
import Button from '../../components/Button/Button';
import ItemMenu from '../../components/ItemMenu/ItemMenu';
import { getProducts } from '../../API/Products';
import IconClose from '../../img/IconClose.svg';
import ModalEx from '../Modal/Modal';


const Menu = ({ setListOrder, listOrder, setResume, resume }) => {
  const [allProducts, setAllProducts] = useState([])
  const [dataProducts, setDataProducts] = useState([]);
  const [typeProducts, setTypeProducts] = useState('');
  const [error, setError] = useState('');
  const [showModal, setShowModal] = useState(false);

  const openModal = () => {
    setShowModal(true);
  };

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await getProducts();
        const json = await response.json();
        
        if (Array.isArray(json)) {
          setAllProducts(json);
        } else {
          setError('Ops! Tivemos um problema, atualize a página e tente novamente.');     
          openModal();
        }
      } catch (error) {
        console.error(error);
      }
    }
    fetchData();
  }, []);

  useEffect(
    () => {
      const openMenu =  () => {
        const filterProducts = allProducts.filter((product) => product.type === typeProducts)
        setDataProducts(filterProducts);
      };
      openMenu();
    },
    [typeProducts]); //lista todos os estados que devem fazer com que a ação dos estados seja refeita

  const addProduct = (product) => {
    if (listOrder.includes(product)) {
      setListOrder([...listOrder, product]); //o q ja tinha + o produto
      const foundIndex = resume.findIndex((element) => element.product === product); //acha o index que tem repetido

      if (foundIndex !== -1) {
        //atualiza o valor de qty se o produto já existir no array resume
        const updatedResume = [...resume];
        let qtdProduct = updatedResume[foundIndex].qty; //atualiza a var
        qtdProduct++;

        updatedResume[foundIndex].qty = qtdProduct; //atualiza o estado do resume
        setResume(updatedResume);

      } else {
        //adiciona um novo objeto ao array resume se o produto não existir
        setResume([...resume, { qty: 1, product }]);
      }

    } else {
      setResume([...resume, { qty: 1, product }]);
      setListOrder([...listOrder, product]);
    }
  };

 

  return (
    <Container>
      <H1>NOVO PEDIDO</H1>
      <DivFlex>
        <Button onClick={() => setTypeProducts('breakfast')} id='btnMenu'>
          CAFÉ DA MANHÃ
        </Button>
        <Button onClick={() => setTypeProducts('appetizers')} id='btnMenu'>
          APERITIVOS
        </Button>
        <Button onClick={() => setTypeProducts('hamburgers')} id='btnMenu'>
          HAMBURGUERS
        </Button>
        <Button onClick={() => setTypeProducts('drinks')} id='btnMenu'>
          BEBIDAS
        </Button>
      </DivFlex>
      <List>
        {dataProducts.map((product) => (
          <ItemMenu
            onClick={() => addProduct(product)}
            name={product.name}
            price={product.price}
            key={product.id}
          />
        ))}
      </List>
      <ModalEx textH2={error} src={IconClose} showModal={showModal} setShowModal={setShowModal}/>

    </Container>
  );
};

export default Menu;
