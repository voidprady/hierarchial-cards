import React, { Component } from 'react';
import './App.css';
import WebFont from 'webfontloader';
import 'font-awesome/css/font-awesome.min.css';
import Card from './components/Card';

WebFont.load({
  google: {
    families : [
      'Titillium Web:300,400,700',
      'Encode Sans Expanded:300,400,700'
    ]
  }
})

class App extends Component {
  state = {
    data : {
        name : "first emp",
        team : "Tech",
        designation: "Manager",
        eid : "EID001",
        collapse: false,
        children:[
          {
            name : "first child",
            team: "Tech",
            designation : "SDE2",
            eid : "EID001C1",
            collapse: true,
            // children:[
            //   {
            //       name : "first child child",
            //       team : "Tech",
            //       designation : "intern",
            //       eid : "EID001C1C1"
            //   },
            //   {
            //       name : "second child child",
            //       team : "Tech",
            //       designation : "intern",
            //       eid : "EID001C1C2"
            //   }
            // ]
          },
          {
            name : "second child",
            team : "Tech",
            designation: "SDE2",
            eid : "EID001C2",
            collapse: true,
          },
          {
            name : "third child",
            team : "Tech",
            designation: "SDE3",
            eid : "EID001C3",
            collapse: true,
          }
        ]
      }
  }

  clickHandler = (id) => {
    console.log(id);
    let activeChilds = document.getElementsByClassName('childs active');
    console.log(activeChilds);
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Organization Hierarchy</h1>
        </header>
        <div className="App-container">
          <Card data = {this.state.data}/>
        </div>
      </div>
    );
  }
}
export default App;
