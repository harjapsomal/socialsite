import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Routes, Route } from "react-router-dom";
import Container from "react-bootstrap/Container";
import "./App.css";
import View from "./View";
import Add from "./Add";
import Navbar from "./Navbar";

function App() {
  // app will track a list of all the todos
  const [todos, changeTodos] = useState([]);
  // through props, pass a function to add, to add props to the list
  // through props, pass the list os posts to view

  // local storage

  // let myVar = "hello"
  // myVar = "world"

  // localStorage.setItem("hello", "my value")
  // localStorage.setItem("hello", "this is the new value")

  // to change the value of a key in local storage, we can just set local storage again and use the same key

  // set local storage example

  // this empty array is
  // called a dependency array. When the array is empty, the code inside of useeffect runs only when the page loads

  useEffect(() => {
    // to set an item (first argument is the key and scond argument is the value assigned to that key)
    // localStorage.setItem("message", "this is a message")
    // to remove an item
    // localStorage.removeItem("message")
    // to remove everything from local storage
    // come back to this item
    // localStorage

    const stringFromLS = localStorage.getItem("list");

    // convert value from local storage from a string to an array

    // if json parse throws an error (it will be throw an error there is no value thus no array to parse)
    // || means OR. If the value before the or is an error / false, run the code on the other side

    changeTodos(JSON.parse(stringFromLS) || []);
  }, []);

  // side effect. When something happens / changes, do something else. On page load and when todos changes, run the code inside use effect

  // JSON = Javascript Object Notation - a compact way of moving javascript data structures such as arrays

  function updateVal(value) {
    console.log(`this is the value ${value}`, value);

    /**
     * This function handles incrementing likes and is passed down to the View child component
     * @param {Object} value
     * The value is the post object the user clicks on
     * { "id": 0,
     * "task": "dddddddddddddddd",
     * "complete": false
      }
     */

    // store prev state in a variable
    // check prev version of state for an object that matches value
    // once object is found, update the like count for that specific object

    // we return a map because it returns a new array that has the updated values

    // todos = [{...}, {...}, {...}]
    // check to find the object that matches value, increment its count

    // let newTodos = duplicate.map((posts) => {
    // if(posts.id === value.id){
    // return {id: value.id, count: value.count + 1}
    // }
    // return posts
    // })
  }

  function updateMyValues(value) {
    // this value is the result of passing said value up from the child component
    changeTodos((prevValue) => {
      let newState = [...prevValue, value];
      localStorage.setItem("list", JSON.stringify(newState));
      return newState;
    });
  }

  return (
    <>
      <Navbar />
      <Routes>
        <Route
          path="/"
          index
          element={
            <Add functionFromParent={(value) => updateMyValues(value)} />
          }
        />
        <Route
          path="/testing"
          element={
            <View
              todos={todos}
              functionFromParent={(value) => updateVal(value)}
            />
          }
        />
      </Routes>
    </>
  );
}
export default App;
