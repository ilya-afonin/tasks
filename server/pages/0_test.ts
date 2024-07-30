interface Todo {
    title: string;
    description: string;
    completed: boolean;
    createdAt: number;
}

type MyPick<T, Keys extends keyof T> = { [k in Keys]: T[k] }
type MyOmit<T, K extends keyof any> = Pick<T, Exclude<keyof T, K>> 


type ToDoPreviewPick = MyPick<Todo, "title" | "completed">;
type TodoPreviewOmit = MyOmit<Todo, "description">;
 
const todo: TodoPreviewOmit = {
  title: "Clean room",
  completed: false,
  createdAt: 1615544252770,
};

console.log(todo)
