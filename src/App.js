import React, { useState, useEffect } from 'react'; //USESTATE É RESPONSAVEL POR EXECUTAR VARIAVEIS QUE PODE ALTERAR DE VALOR. 
import api from './services/api';
import DevForm from './components/DevForm';
import DevItem from './components/DevItem';

import './App.css';
import './global.css';
import './Sidebar.css';
import './Main.css';





function App()

{

  const [devs, setDevs] = useState([]);

  useEffect(() => //FUNCAO RESPONSÁVEL POR DISPARAR UMA FUNCÃO TODA VEZ QUE UM VALOR ALTERAR. PASSA DOIS PARAMETROS (O QUE E QUANDO) - VETORH
{
  async function LoadDevs() //FUNCAO QUE FAZ O GET DOS DADOS NA API
  {
    const response = await api.get('/devs');
      setDevs(response.data);
  }
  LoadDevs(); 
}, []);


 




  async function handleAddDev(data)//FUNCTION QUE DEVEMOS PASSAR O EVENTO POR PARÂMETRO
  {
    
    const response = await api.post('/devs', data); //PASSAMOS A ROTA E BUSCAMOS A API PARA REALIZAR O REQUEST
    setDevs([...devs, response.data]); //mostra a lista dos devs cadastrados logo apos cadastrar um novo
  }

  return (
    <div id="app">
        <aside> 
            <strong>Cadastrar</strong>
         <DevForm onSubmit={handleAddDev}></DevForm>
        </aside>
        <main>
        <ul>
          {devs.map(dev => ( //EXECUTA UM MAPEAMENTO EM CADA ID CADASTRADO PARA REPETIR DENTRO DO HTML
            <DevItem key={dev._id} dev={dev}></DevItem>
          )) }  
          </ul>
        </main>
      </div>
      
     

  );
}

export default App;
