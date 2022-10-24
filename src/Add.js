import React, { useState } from "react";
import { Link } from "react-router-dom";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import toastr from "toastr";
import "toastr/build/toastr.min.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function Add(props) {
  // props is similar to an object whose keys / value are passed into the component via the parent component

  const [formValues, changeFormValues] = useState({
    id: "",
    task: "",
    complete: false,
    likecounter: 0,
    like: false,
  });

  toastr.options = {
    closeButton: false,
    debug: false,
    newestOnTop: false,
    progressBar: true,
    positionClass: "toast-top-right",
    preventDuplicates: false,
    onclick: null,
    showDuration: "300",
    hideDuration: "1000",
    timeOut: "5000",
    extendedTimeOut: "1000",
    showEasing: "swing",
    hideEasing: "linear",
    showMethod: "fadeIn",
    hideMethod: "fadeOut",
  };

  // handle chnaging the form
  const handleChange = (event) => {
    let newVal = event.target.value;
    let keyToChange = event.target.name;
    const newState = { ...formValues };

    if (event.target.name === "complete") {
      newState[keyToChange] = !formValues.complete;
    } else {
      newState[keyToChange] = newVal;
    }
    changeFormValues(newState);
  };

  const submitHandler = () => {
    // call the function we passed down via props

    // pass the value up to the parent via functiofromparent function

    // we call the function via props and pass to it the formValues so
    // that the function which functionfromparent calls can have access to the formValues value

    props.functionFromParent(formValues);
    toastr["success"]("post added", "Success");
  };

  return (
    <>
      <div>
        <Form>
          <Form.Group controlId="taskID" class="addform">
            <Form.Label> User Name</Form.Label>
            <Form.Control
              name="id"
              value={formValues.id}
              type="text"
              onChange={(event) => {
                handleChange(event);
                // console.log(event)
              }}
            />
          </Form.Group>

          <Form.Group controlId="taskDescription" class="addform">
            <Form.Label> Post </Form.Label>
            <Form.Control
              value={formValues.task}
              name="task"
              type="text"
              onChange={(event) => {
                handleChange(event);
              }}
            />
          </Form.Group>

          <Form.Group controlId="complete" class="completeform">
            <Form.Check
              type="checkbox"
              name="complete"
              checked={formValues.checked}
              id="complete"
              label="Completed?"
              onChange={(event) => {
                handleChange(event);
              }}
            />
          </Form.Group>

          <Button
            style={{ marginLeft: "40px" }}
            variant="primary"
            onClick={() => {
              submitHandler();
            }}
          >
            Submit
          </Button>
        </Form>
      </div>
    </>
  );
}

// export by default the function which in this case is called Add.

export default Add;
