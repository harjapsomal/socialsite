import React, { useState } from "react";
import { Link } from "react-router-dom";
import Table from "react-bootstrap/Table";
import "./App.css";
import Button from "react-bootstrap/Button";

function View(props) {
  const likeHandler = (id) => {
    const testing = props.todos.filter((item) => item.id === id);
    // console.log(`this is the testing variable ${testing}`, testing);
    console.log(testing[0]);
    props.functionFromParent(testing[0]);
  };

  const buildRows = () => {
    let createdRows = props.todos.map((current) => {
      console.log("rebuild show posts");
      return (
        <tr key={current.id}>
          <td>{current.id}</td>
          <td>{current.task}</td>
          <td>{current.complete ? "yes" : "no"}</td>
          <td>
            {
              <Button variant="primary" onClick={() => likeHandler(current.id)}>
                like
              </Button>
            }
          </td>
          <td>{current.likecounter}</td>
        </tr>
      );
    });
    return createdRows;
  };

  return (
    <>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>user name</th>
            <th>Post</th>
            <th>complete?</th>
            <th>no of likes</th>
            <th>like</th>
          </tr>
        </thead>
        <tbody>{buildRows()}</tbody>
      </Table>
    </>
  );
}
export default View;
