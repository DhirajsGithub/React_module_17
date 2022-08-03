import React, { useState } from "react";
import todoClass from "../Models/todoClass";

type TodosContextObj = {
  items: todoClass[];
  addTodo: (text: string) => void;
  removeTodo: (id: string) => void;
};


export const TodosContext = React.createContext<TodosContextObj>({
    items: [],
    addTodo: () => {},
    removeTodo: (id: string) => {},
  });


type Props = { children: React.ReactNode };
// actual react componenet
const TodosContextProvider: React.FC<Props> = ({ children }) => {
  const [todos, setTodos] = useState<todoClass[]>([]);
  const addTodoHandler = (todoText: string) => {
    const newTodo = new todoClass(todoText);
    setTodos((prevState) => {
      return prevState.concat(newTodo);
    });
  };
  const removeTodoHandler = (removeId: string) => {
    setTodos((prevState) => {
      return prevState.filter((todo) => {
        return todo.id !== removeId;
      });
    });
  };

  const contextValue: TodosContextObj = {
    items: todos,
    addTodo: addTodoHandler,
    removeTodo: removeTodoHandler,
  };

  return (
    <TodosContext.Provider value={contextValue}>
      {children}
    </TodosContext.Provider>
  );
};

export default TodosContextProvider;
