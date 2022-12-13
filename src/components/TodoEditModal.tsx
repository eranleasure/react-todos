// import React, { useState } from 'react';
import { useEffect, useState } from 'react';
import Button from '../lib/Button';
import Modal from '../lib/Modal';
import { useStore } from '../store';
import { ITodo } from '../types';

interface ITodoEditModalProps {
  todo: ITodo;
}

const TodoEditModal = ({ todo }: ITodoEditModalProps) => {
  const isModalOpen = useStore((state) => state.isModalOpen);
  const toggleIsModalOpen = useStore((state) => state.toggleIsModalOpen);
  // const todoInEdit = useStore((state) => state.todoInEdit);
  const setTodoInEdit = useStore((state) => state.setTodoInEdit);
  const updateTodo = useStore((state) => state.updateTodo);
  const cachedTodo = todo.text;

  const [todoText, setTodoText] = useState(todo.text);

  const handleChange = (e: React.FormEvent<HTMLInputElement>) => {
    // setTodoInEdit({ ...todoInEdit, text: e.currentTarget.value });
    // updateTodo({ ...todoInEdit, text: e.currentTarget.value });
    setTodoText(e.currentTarget.value);
  };

  const handleSubmit = (event: React.SyntheticEvent) => {
    event.preventDefault();
    updateTodo({ ...todo, text: todoText });
    toggleIsModalOpen();
    setTodoInEdit(null);
  };

  const handleCancelClick = () => {
    updateTodo({ ...todo, text: cachedTodo });
    toggleIsModalOpen();
    setTodoInEdit(null);
  };

  return (
    <Modal className={isModalOpen ? 'modal-open' : ''}>
      <header className='mb-4'>
        <h3 className=' font-bold text-xl text-slate-700'>Edit Todo</h3>
      </header>
      <form onSubmit={handleSubmit}>
        <input
          type='text'
          className='input input-bordered w-full'
          value={todoText}
          onChange={handleChange}
          autoFocus
        />
        <div className='w-full mt-4 flex justify-end'>
          <Button color='ghost' type='button' onClick={handleCancelClick}>
            Cancel
          </Button>
          <Button type='submit' className='ml-2'>
            Save
          </Button>
        </div>
      </form>
    </Modal>
  );
};

export default TodoEditModal;
