import create from 'zustand';
import { devtools } from 'zustand/middleware';
import { v4 as uuidv4 } from 'uuid';
import { IState, Filter, ITodo } from '../types';
import { getLocalStorage, setLocalStorage } from '../utils/localstorage';

export const useStore = create<IState, [['zustand/devtools', IState]]>(
  devtools((set) => ({
    todos: getLocalStorage('todos') || [],

    filter: 'all',

    setTodosFilter: (filter: Filter) => {
      set({ filter });
    },

    addTodo: (newTodo: string) => {
      set((state) => {
        const newTodos = [
          ...state.todos,
          {
            id: uuidv4(),
            text: newTodo,
            complete: false,
          },
        ];
        setLocalStorage('todos', newTodos);
        return { todos: newTodos };
      });
    },

    toggleTodo: (todoId: string) => {
      set((state) => {
        const newTodos = state.todos.map((todo) => {
          if (todo.id === todoId) {
            return {
              ...todo,
              complete: !todo.complete,
            };
          }
          return todo;
        });
        setLocalStorage('todos', newTodos);
        return { todos: newTodos };
      });
    },

    removeTodo: (todoId: string) => {
      set((state) => {
        const newTodos = state.todos.filter((todo) => todo.id !== todoId);
        setLocalStorage('todos', newTodos);
        return { todos: newTodos };
      });
    },

    updateTodo: (updatedTodo: ITodo) => {
      set((state) => {
        const newTodos = state.todos.map((todo) => {
          if (todo.id === updatedTodo.id) {
            return updatedTodo;
          }
          return todo;
        });
        setLocalStorage('todos', newTodos);
        return { todos: newTodos };
      });
    },

    todoInEdit: null,

    setTodoInEdit: (todo: ITodo | null) =>
      set((state) => ({
        todoInEdit: todo,
      })),

    isModalOpen: false,

    toggleIsModalOpen: () =>
      set((state) => ({
        isModalOpen: !state.isModalOpen,
      })),
  })),
);
