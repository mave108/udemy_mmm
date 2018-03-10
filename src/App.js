import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      {id:"gjhghg6",name:"Max",age:28},
      {id:"vbvbvc1",name:"Manu",age:27},
      {id:"98876gg",name:"sthapanie",age:26}
    ],
    doesShow: false,
  }
  switchNameHandler = (newName) =>{
  console.log("was clicked");
  this.setState({persons: [
    {name:newName,age:28},
    {name:"Manu",age:27},
    {name:"sthapanie",age:24}
  ]});
  }
  updateNameHandler = (event,id) => {
    
    const personIndex = this.state.persons.findIndex( (p)=>{
      return p.id === id;
    })
    
    let person = {...this.state.persons[personIndex]}
    person.name = event.target.value;

    let persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({persons});
  }
  deletePersoneHandler = (personIndex) =>{
   let persons = [...this.state.persons];
   persons.splice(personIndex,1);
   this.setState({persons});
  }
   doesShowHandler = () =>{
     let doesShow = this.state.doesShow;
     this.setState({doesShow: !doesShow});
     
   }

  render() {
    let buttonStyle = {
      backgroundColor: "green",
      padding:"10px 15px",
      color: "#fff",
      border: "none",
      fontSize: "16px",
      cursor: "pointer"
 
    }
   let personJsx = null;

   if(this.state.doesShow){
     personJsx = (
      <div>
        {
          this.state.persons.map( (person,index) => {
            return <Person key={person.id} 
            click={() => this.deletePersoneHandler(index)} 
            name={person.name} 
            age={person.age} 
            changed={(event) => this.updateNameHandler(event, person.id)}
            />
        })
      }
      </div>
     );
     buttonStyle.backgroundColor = "red";
   }

  let ClassArr = [];
  if(this.state.persons.length <=2){
    ClassArr.push("red");
  }
  if(this.state.persons.length <=1){
    ClassArr.push("bold");
  }

    return (
      <div className="App">
         <p class={ClassArr.join(" ")}>This is React App</p>
         <button style={buttonStyle} onClick={this.doesShowHandler}>Toggle Person</button>
         {personJsx}
      </div>
    );
  }
}

export default App;
