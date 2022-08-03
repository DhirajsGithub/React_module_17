import React, {useContext, useRef} from 'react'
import classes from "./NewTodo.module.css";
import { TodosContext } from '../store/todo-context';

const NewTodo : React.FC= () => {
// const NewTodo : React.FC<{onAddTodo : (text: string)=> void}> = (props) => {

  const todosCtx = useContext(TodosContext)
  // taken a function as props that funciton has parameter of string which is returning void 
    const todoTextRef  = useRef<HTMLInputElement>(null);
    // ref is type HTMLInputElement

    const submitHandler = (event: React.FormEvent)=>{
        event.preventDefault();

        // const todoText = todoTextRef.current?.value;     // not sure if value is inputed or not
        const todoText = todoTextRef.current!.value;        // sure about the value

        if(todoText.trim().length === 0){
            // throw erro 
            return;
        }
        // props.onAddTodo(todoText)
        todosCtx.addTodo(todoText)

    }  
  return (
    <form className={classes.form} action="" onSubmit={submitHandler}>
        <label htmlFor="text">TodoText</label>
        <input ref={todoTextRef} type="text" id="text" />
        <button>Add Todo</button>
    </form>
  )
}

export default NewTodo