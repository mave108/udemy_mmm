import React from 'react';

const person = (props) =>{

    return (
        <div className="person">
        <p onClick={props.click}>Name: {props.name}, Age: {props.age}</p>
         <em>{props.children}</em>
         <input type="text" 
         onChange={props.changed} value={props.name} /> 
        </div>
    );    
}

export default person;