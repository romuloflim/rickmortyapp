import React, { Component } from 'react';
import logo from './media/rickmorty.png';
import './App.css';

import RickMortyList from './components/RickMortyList'

class App extends Component {
  constructor(){
    super();
    this.state = {
      name: "",
    };
    this.onChange = (e) => {
      this.setState({name:e.target.value});
    };
  }

  render() {

    return (
      <div>
        <div className="stars"></div>
        <div className="twinkling"></div>
        <div className="mdl-layout mdl-js-layout mdl-layout--fixed-header">
          <header className="mdl-layout__header mdl-layout__header--transparent mdl-layout__header--scroll md-position">
            <div className="mdl-layout__header-row">
              <div>
                <img className="logo" src={logo} />
              </div>
              <span class="mdl-layout-title">Character Guide</span>
              <div className="mdl-layout-spacer"></div>
              <i class="material-icons md-search">search</i>
            <div class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
              <input name="name" class="mdl-textfield__input" type="text" value={this.state.name} onChange={this.onChange} />
              <label class="mdl-textfield__label" for="sample3">Search...</label>
            </div>
            </div>
          </header>
          <div className="mdl-layout__content md-position">
            <main>
              <RickMortyList search={this.state.name}/>
            </main>
            <footer className="mdl-mini-footer md-position">
              <div className="mdl-mini-footer--left-section">
                
              </div>
              <div className="mdl-mini-footer--right-section">
              <div className="mdl-logo">Romulo Lima Dev</div>
              <ul className="mdl-mini-footer--link-list">
                  <li>Github</li>
                  <li>Heroku</li>
                </ul>
              </div>
            </footer>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
