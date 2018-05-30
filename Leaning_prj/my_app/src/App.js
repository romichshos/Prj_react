import React, { Component } from 'react';
import './App.css';
import Ticker from './Ticker/Ticker.js';

import currencies from './currencies.js';
class App extends Component {

    state ={
        selectedPairs:[],
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
                pairs = pairs.filter(pair => pair!== currency);
            }
            return {selectedPairs:
                pairs,}
            })

    };

  render() {
    return (
      <div className="App">
       <aside>
          <ul className="My_curr">
              {currencies.map(curr=>
                  (<li key={curr} className="currItem">
                       <input type="checkbox" id={curr} onChange={this.handleCheckbox(curr)} />
                       <label htmlFor={curr}>{curr.toUpperCase()}</label>
                  </li>
                  )
                  )
              }
          </ul>
       </aside>
          <main>
              {this.state.selectedPairs.map(pair => <Ticker key={pair} pair={pair}/>)}
          </main>
      </div>
    );
  }
}

export default App;
