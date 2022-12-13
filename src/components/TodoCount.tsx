import { useStore } from '../store';

const TodoCount = () => {
  const todos = useStore((state) => state.todos);
  const completedTodosCount = todos.filter((todo) => !todo.complete).length;

  return (
    <div className='mt-5'>
      <p className='text-sm pl-2'>
        {completedTodosCount} of {todos.length} items left
      </p>
    </div>
  );
};

export default TodoCount;
