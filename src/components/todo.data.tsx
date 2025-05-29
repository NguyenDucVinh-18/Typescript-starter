interface IProps {
  todos: {
    id: number;
    title: string;
    isComplete: boolean;
  }[],
  deleteTodo: (id: number) => void;

}



const TodoData = (props: IProps) => {
  const { todos, deleteTodo } = props;

  const handleDelete = (id: number) => {
    deleteTodo(id);
  }
  return (
    <div className="todo-data">
      <div>
        {todos.map((item) => {
          return (
            <div key={item.id} style={{ display: "flex", justifyContent: "space-between", marginBottom: "10px" }}>
              {item.id} - {item.title}
              <button onClick={() => handleDelete(item.id)}>Delete</button>
            </div>

          );
        })}
      </div>
    </div>
  );
};

export default TodoData;
