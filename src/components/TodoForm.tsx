import React, { useState } from 'react';
import Button from '../lib/Button';
import { useStore } from '../store';

const TodoForm = () => {
  const [todo, setTodo] = useState<string>('');
  const [error, setError] = useState<string>('');
  const addTodo = useStore((state) => state.addTodo);

  const handleChange = (event: React.FormEvent<HTMLInputElement>) => {
    event.preventDefault();
    // reset error on user input
    if (error) {
      setError('');
    }
    setTodo(event.currentTarget.value);
  };

  const handleSubmit = (event: React.SyntheticEvent) => {
    event.preventDefault();
    if (todo.trim()) {
      addTodo(todo.trim());
      setTodo('');
    } else {
      setError('Please enter a todo');
    }
  };

  return (
    <form className='flex mt-10' onSubmit={handleSubmit}>
      <div className='w-full'>
        <input
          type='text'
          placeholder='What did you need to do...'
          className={`input input-bordered w-full ${
            error ? 'input-error' : ''
          }`}
          value={todo}
          onChange={handleChange}
        />
        {error && <span className=' text-sm text-error'>{error}</span>}
      </div>

      <Button className='ml-3' type='submit'>
        Add Todo
      </Button>
    </form>
  );
};

export default TodoForm;
