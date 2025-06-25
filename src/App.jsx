import { Query, QueryClient, QueryClientProvider } from '@tanstack/react-query'
import TodosFilter from './components/todosFilter'
import TodosForm from './components/todosForm'
import TodosPart from './components/TodosPart'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'

const queryClient = new QueryClient({
  defaultOptions: {
    staleTime: 60 * 1000,
  },
})

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools initialIsOpen={false} />
      <div className='contt w-1/2'>
        <div className='top-part flex gap-6'>
          <TodosForm />
          <TodosFilter />
        </div>
        <div className='lower-part !mt-12'>
          <TodosPart />
        </div>
      </div>
    </QueryClientProvider>
  )
}

export default App
