import reactLogo from './assets/react.svg';
import { useStore } from './store';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
import TodoEditModal from './components/TodoEditModal';
import TodoFilter from './components/TodoFilter';
import TodoCount from './components/TodoCount';

const App = () => {
  const todos = useStore((state) => state.todos);
  const todoInEdit = useStore((state) => state.todoInEdit);

  return (
    <>
      <div className='flex justify-center min-h-screen bg-slate-200'>
        <div className='pt-10 w-full max-w-2xl'>
          <header className='flex justify-center items-center'>
            <img src={reactLogo} alt='React.js logo' className='mr-3' />
            <h1 className='text-3xl font-bold'>React Todos</h1>
          </header>
          <TodoForm />
          {todos.length > 0 ? (
            <>
              <div className='flex justify-between items-center'>
                {/* todo count */}
                <TodoCount />
                {/* todo filter */}
                <TodoFilter />
              </div>
              <TodoList />
            </>
          ) : (
            <div className='mt-5'>
              <div className='border-2 border-slate-300 rounded-md w-full flex justify-center items-center min-h-16'>
                <p className='text-xl font-bold'>No todos yet</p>
              </div>
            </div>
          )}
        </div>
      </div>
      {todoInEdit && <TodoEditModal todo={todoInEdit} />}
    </>
  );
};

export default App;
