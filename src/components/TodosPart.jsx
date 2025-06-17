import { Button, Flex, Heading } from '@radix-ui/themes'
import React from 'react'
import TodosList from './TodosList'

const TodosPart = () => {
  return (
    <div>
      <Flex justify={'between'} align={'center'}>
        <Heading>Todos</Heading>
        <Button color='red'>Delete All</Button>
      </Flex>
      <TodosList />
    </div>
  )
}

export default TodosPart
