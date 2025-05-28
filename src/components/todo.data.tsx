interface IProps {
  todos: {
    id: number;
    title: string;
    isComplete: boolean;
  }[];
}

const TodoData = (props: IProps) => {
  const { todos } = props;
  return (
    <div className="todo-data">
      <h2>Todo Data</h2>
      <div>
        {todos.map(item => {
            return (
                <div key={item.id}>
                    <h3>{item.title}</h3>
                </div>
            )
        })}
      </div>
    </div>
  );
};

export default TodoData;
