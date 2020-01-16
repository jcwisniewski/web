import React from 'react';
import logo from './logo.svg';
import './App.css';
import './global.css';
import './Sidebar.css';
function App() {
  
  return (
    <div id="app">
        <aside> 
            <strong>Cadastrar</strong>
            <form>
              <div className="input-block">
                <label htmlFor="">Usuário do Github</label>
                <input name="github_username" id="github_username" required />
              </div>
              
              <div className="input-block">
                <label htmlFor="">Techs</label>
                <input name="techs" id="techs" required />
              </div>
              
            <div className="input-group">
                <div className="input-block">
                  <label htmlFor="">Latitude</label>
                  <input name="latitude" id="latitude" required />
                </div>
                <div className="input-block">
                  <label htmlFor="">Longitude</label>
                  <input name="longitude" id="longitude" required />
                </div>
              </div>
               <button class = "button" type="submit">Salvar</button>
            </form>
        </aside>
        <main>
          <ul>
            <li className="dev-item">
              <header>
                <img src="https://avatars1.githubusercontent.com/u/47247293?s=460&v=4"></img>
                  <div className = "user-info">
                      <strong> Julio Cesar </strong>    
                      <span>React, NodeJS</span>
                  </div>
              </header>
                <p>Apaixonado por tenclogia. Leia e beba água</p>
                <a href="https://github.com/jcwisniewski">Acessar Perfil do GitHub</a>
            </li>

            <li className="dev-item">
              <header>
                <img src="https://avatars1.githubusercontent.com/u/47247293?s=460&v=4"></img>
                  <div className = "user-info">
                      <strong> Julio Cesar </strong>    
                      <span>React, NodeJS</span>
                  </div>
              </header>
                <p>Apaixonado por tenclogia. Leia e beba água</p>
                <a href="https://github.com/jcwisniewski">Acessar Perfil do GitHub</a>
            </li>

            <li className="dev-item">
              <header>
                <img src="https://avatars1.githubusercontent.com/u/47247293?s=460&v=4"></img>
                  <div className = "user-info">
                      <strong> Julio Cesar </strong>    
                      <span>React, NodeJS</span>
                  </div>
              </header>
                <p>Apaixonado por tenclogia. Leia e beba água</p>
                <a href="https://github.com/jcwisniewski">Acessar Perfil do GitHub</a>
            </li>

            <li className="dev-item">
              <header>
                <img src="https://avatars1.githubusercontent.com/u/47247293?s=460&v=4"></img>
                  <div className = "user-info">
                      <strong> Julio Cesar </strong>    
                      <span>React, NodeJS</span>
                  </div>
              </header>
                <p>Apaixonado por tenclogia. Leia e beba água</p>
                <a href="https://github.com/jcwisniewski">Acessar Perfil do GitHub</a>
            </li>
          </ul>
        </main>
      </div>
      
     

  );
}

export default App;
