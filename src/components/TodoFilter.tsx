import React from 'react';
import { useStore } from '../store';
import Button from '../lib/Button';
import { Filter } from '../types';

const TodoFilter = () => {
  const filtersArr = Object.values(Filter);
  const setTodosFilter = useStore((state) => state.setTodosFilter);

  console.log(filtersArr);

  return (
    <div className='btn-group mt-5'>
      {filtersArr.map((filter) => (
        <Button size='sm' key={filter} onClick={() => setTodosFilter(filter)}>
          {filter}
        </Button>
      ))}
    </div>
  );
};

export default TodoFilter;
