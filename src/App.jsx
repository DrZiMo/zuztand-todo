import TodosFilter from './components/todosFilter'
import TodosForm from './components/todosForm'
import TodosPart from './components/TodosPart'

function App() {
  return (
    <div className='contt w-1/2'>
      <div className='top-part flex gap-6'>
        <TodosForm />
        <TodosFilter />
      </div>
      <div className='lower-part !mt-12'>
        <TodosPart />
      </div>
    </div>
  )
}

export default App
