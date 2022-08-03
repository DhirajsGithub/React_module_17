import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import Todos from "./Componenets/Todos";
import todoClass from "./Models/todoClass";
import NewTodo from "./Componenets/NewTodo";

function App() {
  // const todos = [new todoClass("item 1.1"), new todoClass("item 1.2")];
  // const [todos, setTodos] = useState<todoClass []>([]); 
  // const addTodoHandler = (todoText : string)=>{
  //   const newTodo = new todoClass(todoText);
  //   setTodos((prevState)=>{
  //     return prevState.concat(newTodo)
  //   })
  // }
  // const removeTodoHandler = (removeId : string)=>{
  //   setTodos((prevState)=>{
  //     return prevState.filter(todo => {
  //       return todo.id !== removeId;
  //     })
  //     // const listItems = prevState.filter((item)=>{
  //     //   return item.id !== removeId;
  //     // })
  //     // return prevState = listItems;
  //   })
  // }
  return (
    // <Todos items={["items1", "item2", "item32"]} children={'somthing'} />
    // <Todos items={["items1", "item2", "item32"]} />
    <div>
      {/* <NewTodo onAddTodo={addTodoHandler} />
      <Todos onRemoveTodo={removeTodoHandler} items={todos} /> */}
      <NewTodo/>
      <Todos />
    </div>
   
  );
}

export default App;
