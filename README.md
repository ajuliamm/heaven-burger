# Heaven Burger :hamburger: :fries:

Quinto projeto desenvolvido para o Bootcamp de Desenvolvimento Web da [@Laboratória](https://www.laboratoria.la/br). O objetivo consiste em uma interface voltada para o gerenciamento de uma hamburgueria. Nesta aplicação, usou-se a integração com API e o framework React.
***
<div align="center">
  
  <br>
  <br>
  <img align="center" alt="git" height="30" width="40" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" />
  <img align="center" alt="Insomnia" height="30" width="40" src="https://user-images.githubusercontent.com/120285942/236062287-09f1bc78-7e35-45bc-b420-17b08bd4f81d.svg">
  <img align="center" alt="Rafa-HTML" height="30" width="40" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original.svg">
  <img align="center" alt="Rafa-CSS" height="30" width="40" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original.svg">
  <img align="center" alt="Rafa-Js" height="30" width="40" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-plain.svg">
  <img align="center" alt="vscode" height="30" width="40" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg" />
  <img align="center" alt="Figma" height="30" width="40" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg" />
  <img  align="center" alt="Node" height="30" width="40" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" />
  <img align="center" alt="React" height="30" width="40" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original.svg">
  <img align="center" alt="Canva" height="40" width="40" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/canva/canva-original.svg"><br>
  <br>
  
  Acesse o projeto [aqui.](https://heaven-burger-ajuliamm.vercel.app/)
  <br>
  <br>
  Desenvolvedoras: <br>
  <br>
  <br>
  <img align="center" alt="AnaLeticia" height="450" width="290" src="https://user-images.githubusercontent.com/30864314/236303724-e5348305-580a-4d61-9b6f-0ee83b83b188.png" />
   <img align="center" alt="Angelina" height="450" width="290" src="https://user-images.githubusercontent.com/30864314/236303365-71384765-eb5d-45d7-b0fb-51164287d866.png"/>

</div>
 
***

## Índice

* [1. Instruções para Login](#1-instruções-para-login) 🗒️
* [2. Histórias de Usuário](#2-histórias-de-usuário) 🖊️
* [3. Cenário 1 - Atendente](#3-cenário-1-atendente) 🍔
* [4. Cenário 2 - Chefe](#4-cenário-2-chefe) 📌
* [5. Cenário 3 - Administrador](#5-cenário-3--administrador) 🔒
* [6. Responsividade](#6-responsividade) 🔃
* [7. Authors](#7-authors) 📎

***
## 1. Instruções para Login 🗒️

Heaven Burger é uma hamburgueria preocupada com a satisfação do cliente e para isso, desenvolveu-se uma aplicação apta à atender as necessidades da equipe e principalmente dos clientes.

Há três tipos de login na aplicação: Atendente, Chefe e Administrador.
- **Atendente:** Responsável por anotar os pedidos de acordo com a vontade do cliente, acompanhar os pedidos enviados para a cozinha, e quando prontos, servir para os clientes.
- **Chefe:** Responsável por receber os pedidos anotados pelo atendente, finalizá-los na cozinha e enviar para o atendente servir.
- **Administrador:** Responsável pelo cadastro dos colaboradores, cadastro de produtos e visualização desses dados.

A aplicação segue um fluxo intuitivo e direcionado a fim de proporcionar a melhor experiência para usuário. O fluxograma abaixo exemplifica o caminho percorrido na aplicação usando como exemplo um login de ATENDENTE ou de CHEFE.

<div align="center">
  <img width="500" src="https://github.com/ajuliamm/heaven-burger/assets/30864314/27894790-5d4b-45bc-b5f5-e3ddd31e05d8"/>
</div>

Ao acessar a [aplicação](https://heaven-burger-ajuliamm.vercel.app/), o usuário irá interagir com a página principal de Login, e após isso, a página para inserção das credencias para entrar no sistema. A aplicação está apta a informar o usuário sobre possíveis erros no login (senha ou email incorretos ou algum dos campos vazios, por exemplo).

<div align="center">
  <img width="500" src="https://github.com/ajuliamm/heaven-burger/assets/30864314/006b9e29-5344-4dd8-93f5-a9dc65abdeb6"/>
  <img width="500" src="https://github.com/ajuliamm/heaven-burger/assets/30864314/f61668ae-fa2f-48b8-aa1f-c8e7bf6868b9"/><br>
</div>
<br>

<div align="center">
  Você pode acessar com as seguintes credenciais: <br>
  
  <table>
    <tr>
      <th>Cargo</th>
      <th>Email</th>
      <th>Senha</th>
    </tr>
    <tr>
      <td>Atendimento</td>
      <td>atendente@hb.com</td>
      <td>123456</td>
    </tr>
    <tr>
      <td>Chefe de cozinha</td>
      <td>chef@hb.com</td>
      <td>123456</td>
    </tr>
    <tr>
      <td>Administrador</td>
      <td>adm@hb.com</td>
      <td>123456</td>
    </tr>
  </table>
</div>

***
## 2. Histórias de Usuário 🖊️

<div align="center">
  <img width="600" src="https://github.com/ajuliamm/heaven-burger/assets/30864314/d3b8b94c-3ddb-4e94-8e30-986385c66a16"/>
</div>


***
## 3. Cenário 1 - Atendente

O perfil de Atendente, ao efetuar o login, o usuário irá se deparar com a tela inicial e o menu lateral com opções de interação (Novo Pedido, Pedidos em Espera, Pedidos Finalizados e Logout). Ao clicar em novo pedido, o atendente visualiza o cardápio dividido em 4 partes: Café da manhã, Hamburguers, Aperitivos e Bebidas.
<div align="center">
  <img width="500" src="https://github.com/ajuliamm/heaven-burger/assets/30864314/3df2a1fd-e223-4694-935c-ba37e3532c48"/>
  <img width="500" src="https://github.com/ajuliamm/heaven-burger/assets/30864314/991debf2-319c-4828-ba06-e12220ddb29e"/>
</div>

Ao clicar em algum cardápio (por exemplo: hamburguers) o atendente visualiza as opções e consegue selecionar de acordo com o pedido do cliente. Ao lado, é possível aumentar ou diminuir as quantidades, e também excluir o item selecionado caso precise. O valor total do pedido é calculado automaticamente conforme interação.

<div align="center">
  <img width="500" src="https://github.com/ajuliamm/heaven-burger/assets/30864314/24ebc7a2-5eeb-4ea7-b5dd-2b2ab5377df3"/>
</div>

Ao confirmar o envio do pedido, o sistema alerta se foi concluído com sucesso. Após isso, as informações anteriores são descartadas para que o usuário possa fazer um novo pedido. O pedido realizado é enviado para a cozinha, onde poderá ser visualizado pelo Chefe. Após a aprovação pelo Chefe, o Atendente conseguirá servir os pedidos nas mesas.

<div align="center">
  <img width="500" src="https://github.com/ajuliamm/heaven-burger/assets/30864314/c66a3f48-1c7b-427f-9704-0298ff80d39d"/>
</div>

***
## 4. Cenário 2 - Chefe

O perfil de Chefe, ao realizar login, o usuário irá se deparar com a tela inicial e o menu lateral com apenas as opções de Pedidos em Espera, Pedidos Finalizados e Logout.

<div align="center">
  <img width="500" src="https://github.com/ajuliamm/heaven-burger/assets/30864314/1049c91f-94cd-4035-9454-71dd8eb4fcef"/>
</div>

Ao clicar no ícone de Pedidos em Espera, o chefe terá a visualização dos pedidos que foram anotados pelo atendente e terá a opção de finalizá-los.
<div align="center">
  <img width="500" src="https://github.com/ajuliamm/heaven-burger/assets/30864314/e960fd6c-93f1-4585-b03a-afe4db7a1ecf"/>
  <img width="500" src="https://github.com/ajuliamm/heaven-burger/assets/30864314/a864bd1c-0585-4e67-9166-806d51c0023f"/>
</div>

***
## 5. Cenário 3 - Administrador

O perfil de Administrador ao efetuar o login, irá se deparar com a tela inicial e o menu lateral com opções de Cadastrar Colaboradores/Produtos, Lista de Colaboradores, Lista de Produtos e Logout.  Ao clicar em Cadastrar, irá ter a opção de cadastrar produtos ou colaboradores.
<div align="center">
  <img width="500" src="https://github.com/ajuliamm/heaven-burger/assets/30864314/a181e0a0-4b08-4e40-8119-f2064d4f226b"/>
  <img width="500" src="https://github.com/ajuliamm/heaven-burger/assets/30864314/3986da8b-fa5d-43b5-85a6-8528efb61729"/>
</div>

Ao clicar em colaboradores, o usuário conseguirá ver a lista de todos os colaboradores cadastrados na aplicação. Nessa tela, poderá alterar um colaborador cadastrado ou excluir.

<div align="center">
  <img width="500" src="https://github.com/ajuliamm/heaven-burger/assets/30864314/5fef6473-5a87-4e26-9e18-6ca15f617deb"/>
  <img width="500" src="https://github.com/ajuliamm/heaven-burger/assets/30864314/2ce9b4c3-ac6b-4afc-9d5c-5d3d2c0c623a"/>
</div>

O Administrador terá acesso a tela com a lista dos produtos cadastrados. Nessa tela, poderá alterar os existentes ou excluir algum produto.

<div align="center">
  <img width="500" src="https://github.com/ajuliamm/heaven-burger/assets/30864314/ebfc070b-a42f-4a50-bac8-02bc95634279"/>
  <img width="500" src="https://github.com/ajuliamm/heaven-burger/assets/30864314/423d7345-511b-4ad7-b0ad-a0cf3c290550"/>
</div>

***
## 6. Responsividade

A aplicação é responsiva para todos os tamanhos de tela. A adaptação do sistema preza pela experiência dos usuários e está apta para atender as mais diversas necessidades.
<div align="center">
  <img width="400" src="https://github.com/ajuliamm/heaven-burger/assets/30864314/47f81b5f-5345-4266-9e8a-9adc13a284fb"/>
  <img width="400" src="https://github.com/ajuliamm/heaven-burger/assets/30864314/8a22d553-4aff-4347-be24-b9a8c2c840cd"/>
  <img width="400" src="https://github.com/ajuliamm/heaven-burger/assets/30864314/5050b361-5c07-45ef-8ba0-d9ee7880482f"/>
</div>


***
## 7. Authors

- Ana Leticia B. Prince: [Linkedin](https://www.linkedin.com/in/analeticiabacha/)
- Angelina Melo: [Linkedin](https://www.linkedin.com/in/angelinamelo/)

***
Em construção :construction:
