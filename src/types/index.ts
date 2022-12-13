export interface IState {
  todos: ITodo[];
  filter: 'all' | 'completed' | 'incomplete';
  setTodosFilter: (filter: Filter) => void;
  addTodo: (newTodo: string) => void;
  toggleTodo: (todoId: string) => void;
  removeTodo: (todoId: string) => void;
  updateTodo: (updatedTodo: ITodo) => void;
  todoInEdit: ITodo | null;
  setTodoInEdit: (todo: ITodo | null) => void;
  isModalOpen: boolean;
  toggleIsModalOpen: () => void;
}

export interface ITodo {
  id: string;
  text: string;
  complete: boolean;
}

export enum Filter {
  ALL = 'all',
  COMPLETED = 'completed',
  INCOMPLETE = 'incomplete',
}

// export interface IModalState {
//   isModalOpen: boolean;
//   toggleIsModalOpen: () => void;
// }
