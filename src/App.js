import React, { Component, useState } from "react";
import { Button, Form, Container, Header } from "semantic-ui-react";

import axios from "axios";
import "./App.css";
import Swal from "sweetalert2";

function App() {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [salary, setSalary] = useState("");
  const [hobby, setHobby] = useState("");

  //Easy function to clear all form inputs and runs in handleSubmit function
  const clearInputs = () => {
    setName("");
    setAge("");
    setSalary("");
    setHobby("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    //form validation: makes sure user fills out all input fields
    if (name === "" || age === "" || salary === "" || hobby === "") {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Please fill out all input fields!",
      });
    } else {
      let obj = { name, age, salary, hobby };
      console.log("This is obj to send:", obj);

      // POSTs collected data from form to google sheets REST API
      axios
        .post(
          "https://sheet.best/api/sheets/cc0d450b-7432-4cd9-bba6-aa226b4d6fe5",
          obj
        )
        .then((response) => {
          console.log("In POST back from googleSheets", response);
          //success popup message on successful submit
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "submitted successfully!",
            showConfirmButton: false,
            timer: 1500,
          });
        });
      clearInputs();
    }
  };

  const changeHandler = (e) => {
    switch (e.target.name) {
      case "name":
        setName(e.target.value);
        break;
      case "age":
        setAge(e.target.value);
        break;
      case "salary":
        setSalary(e.target.value);
        break;
      case "hobby":
        setHobby(e.target.value);
        break;
      default:
        console.log(`Something is wrong.  Try again`);
    }
  };

  return (
    <Container fluid className="container">
      <Header as="h2">React Google Sheets!</Header>
      <Form className="form" onSubmit={handleSubmit}>
        <Form.Field>
          <label>Name</label>
          <input
            placeholder="Enter your name"
            type="text"
            name="name"
            value={name}
            onChange={changeHandler}
          />
        </Form.Field>
        <Form.Field>
          <label>Age</label>
          <input
            placeholder="Enter your age"
            type="number"
            name="age"
            value={age}
            onChange={changeHandler}
          />
        </Form.Field>
        <Form.Field>
          <label>Salary</label>
          <input
            placeholder="Enter your salary"
            type="number"
            name="salary"
            value={salary}
            onChange={changeHandler}
          />
        </Form.Field>
        <Form.Field>
          <label>Hobby</label>
          <input
            placeholder="Enter your hobby"
            type="text"
            name="hobby"
            value={hobby}
            onChange={changeHandler}
          />
        </Form.Field>

        <Button color="blue" type="submit">
          Submit
        </Button>
      </Form>
    </Container>
  );
}

export default App;
