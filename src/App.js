import React, { Component, useState } from 'react'
import { Button, Form, Container, Header } from 'semantic-ui-react'
import './App.css';

function App() {

const [name, setName] = useState('');
const [age, setAge] = useState('');
const [salary, setSalary] =useState('');
const [hobby, setHobby] =useState('');

nameHandler = (e) => {
  setName(e.target.value);
}
nameHandler = (e) => {
  setAge(e.target.value);
}
nameHandler = (e) => {
  setSalary(e.target.value);
}
nameHandler = (e) => {
  setHobby(e.target.value);
}

  return (
    <Container fluid className="container">
        <Header as='h2'>React Google Sheets!</Header>
        <Form className="form" onSubmit={this.submitHandler}>
          <Form.Field>
            <label>Name</label>
            <input placeholder='Enter your name' type="text" name = "name" value = {name} onChange={this.changeHandler}/>
          </Form.Field>
          <Form.Field>
            <label>Age</label>
            <input placeholder='Enter your age' type="number" name = "age" value = {age} onChange={this.changeHandler}/>
          </Form.Field>
          <Form.Field>
            <label>Salary</label>
            <input placeholder='Enter your salary' type="number" name = "salary" value = {salary} onChange={this.changeHandler}/>
          </Form.Field>
          <Form.Field>
            <label>Hobby</label>
            <input placeholder='Enter your hobby' type="text" name = "hobby" value = {hobby} onChange={this.changeHandler}/>
          </Form.Field>
          
          <Button color="blue" type='submit'>Submit</Button>
        </Form>
      </Container>
  );
}

export default App;
