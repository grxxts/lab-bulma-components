import NavBarComponent from './navbar/navbar.js';
import formField from "./formField/formField";
import CoolButtom from './coolbuttom/coolbuttom.js';

import React, { Component } from "react";

export default class App extends React.Component {

  constructor() {
    super();
    this.formFields =[
      {
        set: "Name", 
        placeholder: "e.g Alex Smith"
      },
      {
        set: "Email", 
        placeholder: "e.g. alexsmith@gmail.com"
      }
    ]
  }

render() {
    return (
      <div className="App">
        
      <NavBarComponent/>
      {this.formfields.map((formfield, i) => (<formField key={i} label={formfield.set} type="text" placeholder={formField.placeholder}></formField>))}       
      <formFieldComponent label="Name" type="text" placeholder="e.g Alex Smith" />
      <formFieldComponent label="Email" type="email" placeholder="e.g. alexsmith@gmail.com" />
      </div>
    );
  }
}