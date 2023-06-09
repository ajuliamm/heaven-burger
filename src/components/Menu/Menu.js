import Modal from 'react-modal';
import React, { useState, useEffect } from 'react';
import { Container, DivFlex, H1, List, ImgIcon } from './Styles';
import Button from '../../components/Button/Button';
import ItemMenu from '../../components/ItemMenu/ItemMenu';
import { getProducts } from '../../API/Products';
import IconClose from '../../img/IconClose.svg';


const Menu = ({ setListOrder, listOrder, setResume, resume }) => {
  const [allProducts, setAllProducts] = useState([])
  const [dataProducts, setDataProducts] = useState([]);
  const [typeProducts, setTypeProducts] = useState('');
  const [modalIsOpen, setIsOpen] = useState(false);
  const [error, setError] = useState('');

  //const {token} = useContext(OrderContext);
  //console.log(token)
  useEffect(() => {
    async function fetchData() {
      try {
        const response = await getProducts();
        const json = await response.json();
        
        if (Array.isArray(json)) {
          setAllProducts(json);
        } else {
          console.log(json)
          setError('Ops! Tivemos um problema, atualize a página e tente novamente.')        
          openModal()
        }
        
      } catch (error) {
        console.error(error);
      }
    }
    fetchData()
  }, []);

  useEffect(
    () => {
      const openMenu =  () => {
        const filterProducts = allProducts.filter((product) => product.type === typeProducts)
        console.log(typeof filterProducts)
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

  function openModal(){
    setIsOpen(true);
  } 

  function closeModal(){
    setIsOpen(false);  
  } 

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
          //console.log(product, product.name, product.price, product.id)
        ))}
      </List>
      
      <Modal isOpen={modalIsOpen} onRequestClose={closeModal} contentLabel='Modal enviar pedido'
      style={{
        overlay: {
          
          position:'absolute',
          top:'calc(50vh - 150px)',
          left:'calc(50vw - 190px)',
          backgroundColor: '#E48B26',
          width: '380px',
          height: '300px',
          borderRadius: '10px',
          
        },
        content: {
          fontSize: '10px',
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: 'column',
          gap:'30px',
          border: '1px solid',
          background: 'rgb(69,30,18,80%)',
          borderRadius: '15px',
          color:'#E99331'
          
        }
      }}>
        <ImgIcon src={IconClose}/>
        <h2>{error}</h2>
        <Button id='buttonModal' onClick={closeModal}>OK</Button>
      </Modal>
    </Container>
  );
};

export default Menu;
