import React, { Component } from 'react';
import './App.css';

import currencies from './currencies.js';
class App extends Component {

    state ={
        selectedPairs:[]
    };

    handleCheckbox = (currency) => event=>{

        const {checked} = event.target;

        this.setState(({selectedPairs})=>{
            let pairs = [...selectedPairs];

            if (checked)
            {
                pairs.push(currency);
            }
            else{
                pairs.delete(currency);
            }
            return {selectedPairs
            :['COIN']}
            })

    };

  render() {
    return (
      <div className="App">
       <aside>
          <ul className="My_curr">
              {currencies.map(curr=>
                  (<li key={curr} className="currItem">
                      <label>{curr}
                          <input type="checkbox" id={curr} onChange={this.handleCheckbox} />
                      </label>
                  </li>)
                  )
              }
          </ul>
       </aside>
      </div>
    );
  }
}

export default App;
