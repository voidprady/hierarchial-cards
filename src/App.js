import React, { Component } from 'react';
import './App.css';
import WebFont from 'webfontloader';
import 'font-awesome/css/font-awesome.min.css';
import Card from './components/Card';


class App extends Component {
  state = {
    data : {
        name : "first emp",
        team : "Tech",
        designation: "Manager",

        children:[
          {
            name : "first child",
            team: "Tech",
            designation : "SDE2"
          },
          {
            name : "second child",
            team : "Tech",
            designation: "SDE2"
          },
          {
            name : "third child",
            team : "Tech",
            designation: "SDE3"
          }
        ]
      }
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Organization Hierarchy</h1>
        </header>
        <div className="App-container">
          <Card data = {this.state.data} />
        </div>
      </div>
    );
  }
}
export default App;
