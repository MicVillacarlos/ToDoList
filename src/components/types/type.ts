
interface Task {
    _id: string;
    value: string;
  }

  type EditTodoProps  ={
    onClick: React.MouseEventHandler<HTMLButtonElement>;
    onChange: Function;
    value:string;
}


export type { Task, EditTodoProps }