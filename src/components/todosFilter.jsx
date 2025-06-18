import { Box, Tabs, Text } from '@radix-ui/themes'
import { useTodos } from '../store/todosStore'
import TodoFilterList from './todoFilterList'

const TodosFilter = () => {
  const todos = useTodos((state) => state.todos)
  const pendingTodos = todos.filter((todo) => todo.status === 'PENDING')
  const doneTodos = todos.filter((todo) => todo.status === 'DONE')
  const deniedTodos = todos.filter((todo) => todo.status === 'DENIED')

  return (
    <div className='todo-filter border border-gray-400 rounded-md p-10'>
      <Tabs.Root defaultValue='pending' className='tab'>
        <Tabs.List>
          <Tabs.Trigger value='pending'>Pending</Tabs.Trigger>
          <Tabs.Trigger value='done'>Done</Tabs.Trigger>
          <Tabs.Trigger value='denied'>Denied</Tabs.Trigger>
        </Tabs.List>

        <Box pt='3'>
          <Tabs.Content value='pending'>
            <TodoFilterList todos={pendingTodos} />
          </Tabs.Content>

          <Tabs.Content value='done'>
            <TodoFilterList todos={doneTodos} />
          </Tabs.Content>

          <Tabs.Content value='denied'>
            <TodoFilterList todos={deniedTodos} />
          </Tabs.Content>
        </Box>
      </Tabs.Root>
    </div>
  )
}

export default TodosFilter
