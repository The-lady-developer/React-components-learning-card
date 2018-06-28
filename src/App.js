import React, { Component } from 'react';

import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
 Persons: [
      { name:'manvi', age:20 },
      { name:'priyanshi', age:18 },
      { name:'manu', age:18 },
      { name:'neha', age:20 }
          ],
          otherState: 'some other value',
          showPersons: false
 }
     switchNameHandler =(newName) => {
     //console.log("click clic!");
     //DON'T DO THIS: this.state.Persons[0].name = 'Manvi Singhwal';
     this.setState({
      Persons: [
        { name: newName, age:20 },
        { name:'priyanshi', age:18 },
        { name:'manu', age:19 },
        { name:'neha', age:20 }
            ],
     });
    }

    nameChangedHandler = (event) => {
      this.setState({
        Persons: [
          { name: 'Manvi', age:20 },
          { name: event.target.value, age:18 },
          { name:'manu', age:19 },
          { name:'neha', age:20 }
              ],
       });
      }
     
      togglePersonsHandler = () => {
      const doesShow = this.state.showPersons;
      this.setState({showPersons: !doesShow});     
      }
    
      render() {
    const style = {
     backgroundColor: 'white',
     font: 'inherit',
     border: '1px solid blue',
     padding: '8px',
     cursor: 'pointer'
  };
    let persons =  null;

     if (this.state.showPersons) {
      persons = (
        <div>
        < Person name={this.state.Persons[0].name} 
        age={this.state.Persons[0].age}/>
        < Person name={this.state.Persons[1].name}  
        age={this.state.Persons[1].age} 
        click = {this.switchNameHandler.bind(this, 'Manvi')}
        changed={this.nameChangedHandler}>my hobbies: eating</Person>
        < Person name={this.state.Persons[2].name} 
        age={this.state.Persons[2].age}/>
        < Person name={this.state.Persons[3].name} 
        age={this.state.Persons[3].age}/>
        </div> 
      );
     }


    return (
      <div className="App">
        <h1>Hi!we are going for a trip :p</h1>
        
        <p>manu, priyanshi, neha...Are you guys ready!?? </p>
        <button 
        style = {style}
        onClick={this.togglePersonsHandler}>Toggle Persons</button>
        {persons}
        </div>
    );
  }
}

export default App;
