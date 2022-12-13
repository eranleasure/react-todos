import { useStore } from '../store';
import TodoListItem from './TodoListItem';

const TodoList = () => {
  const todos = useStore((state) => state.todos);
  const todosFilter = useStore((state) => state.filter);
  const filteredTodos = todos.filter((todo) => {
    switch (todosFilter) {
      case 'incomplete':
        return !todo.complete;
      case 'completed':
        return todo.complete;
      default:
        return true;
    }
  });

  return (
    <ul className='w-full bg-white rounded-lg shadow-md mt-5'>
      {filteredTodos.map((todo) => (
        <TodoListItem key={todo.id} todo={todo} />
      ))}
    </ul>
  );
};

export default TodoList;
