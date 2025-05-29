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
      <div>
        {todos.map((item) => {
          return (
            <div key={item.id}>
              {item.id} - {item.title}
              &nbsp;&nbsp;&nbsp;&nbsp;<button>Delete</button>
            </div>

          );
        })}
      </div>
    </div>
  );
};

export default TodoData;
