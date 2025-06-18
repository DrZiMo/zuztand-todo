import { Button, Flex, Heading } from '@radix-ui/themes'
import React from 'react'
import TodosList from './TodosList'
import { useTodos } from '../store/todosStore'

const TodosPart = () => {
  const todos = useTodos((state) => state.todos)
  const deleteAll = useTodos((state) => state.deleteAllTodos)
  return (
    <div>
      <Flex justify={'between'} align={'center'}>
        <Heading>Todos ({todos.length})</Heading>
        <Button color='red' onClick={deleteAll}>
          Delete All
        </Button>
      </Flex>
      <TodosList />
    </div>
  )
}

export default TodosPart
