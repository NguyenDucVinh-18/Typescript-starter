import { useState } from "react";

interface ITodo {
    id: number;
    title: string;
    isComplete: boolean;
  }

interface IProps {
    addTodo : (v: ITodo ) => void;
  }
  

const TodoInput = (props: IProps) => {

    const [todo, setTodo] = useState<string>("");
    const { addTodo } = props;

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setTodo(e.target.value);
    }

    const randomId = () => {
        return Math.floor(Math.random() * 100000);
    }

    const handleAdd = () => {
        if (!todo) {
            alert("Please enter a todo");
            return;
        }
        addTodo({
            id: randomId(),
            title: todo,
            isComplete: false
        })
        setTodo("");
    }

    return (
        <div style={{ display: "flex", gap: "10px", marginBottom: "20px" }}>
            <input  type="text" value={todo} onChange={handleChange}/>
            <button onClick={handleAdd}>Add</button>
        </div>
    )
}

export default TodoInput;