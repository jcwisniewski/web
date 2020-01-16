import React from 'react';
import logo from './logo.svg';
import './App.css';
import './global.css';
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
              <button type="submit">Salvar</button>
            </form>
        </aside>
        <main>
          
        </main>
      </div>
      
     

  );
}

export default App;
