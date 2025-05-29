import { useState } from "react";
import TodoData from "./todo.data";
import TodoInput from "./todo.input";

interface ITodo {
  id: number;
  title: string;
  isComplete: boolean;
}

const TodoList = () => {
  //   const todos = [
  //     {
  //       id: 1,
  //       title: "Learn React TypeScript",
  //       isComplete: false,
  //     },
  //     {
  //       id: 2,
  //       title: "Subscribe Youtube HoiDanIT",
  //       isComplete: true,
  //     },
  //     {
  //       id: 3,
  //       title: "Learn English",
  //       isComplete: true,
  //     },
  //   ];
  const [listTodos, setListTodos] = useState<ITodo[]>([]);

  const addTodo = (todo: ITodo) => {
    setListTodos((prevTodos) => [...prevTodos, todo]);
  };

  return (
    <>
      <div
        style={{
          margin: "20px auto",
          width: "500px",
          border: "1px solid #ccc",
          padding: "20px",
        }}
      >
        <h3> TO DO LIST</h3>
        <hr />
        <TodoInput addTodo={addTodo} />
        <TodoData todos={listTodos} />
      </div>
    </>
  );
};

export default TodoList;
