import React, { useContext } from 'react'
import todoClass from "../Models/todoClass";
import TodoItems from './TodoItems';
import classes from "./Todos.module.css";
import { TodosContext } from '../store/todo-context';

// const Todos : React.FC<{items : string[]}> = (props) => {

// const Todos : React.FC<{items : todoClass[]; onRemoveTodo: (id : string)=>void}> = (props) => {
  // for props
    // FC for functional component

const Todos : React.FC = (props) => {
  // for ctx
  
    const todosCtx = useContext(TodosContext);
    return (
      <ul className={classes.todos}>
          {todosCtx.items.map((item)=>{
              return (
                 <TodoItems removeItem={todosCtx.removeTodo.bind(null, item.id)} key={item.id} id={item.id} item = {item.text} />
              )
          })}
      </ul>
      // <ul className={classes.todos}>
      //     {props.items.map((item)=>{
      //         return (
      //            <TodoItems removeItem={props.onRemoveTodo.bind(null, item.id)} key={item.id} id={item.id} item = {item.text} />
      //         )
      //     })}
      // </ul>
    )
  }

// this will be cumbersum method i.e. to define children type as well as a props
// const Todos = (props : {items : string[], children: any}) => {
//   return (
//     <ul>
//         {props.items.map((item)=>{
//             return (
//                 <li>{item}</li>
//             )
//         })}
//     </ul>
//   )
// }

export default Todos