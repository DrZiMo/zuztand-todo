import { Badge, Flex, Heading } from '@radix-ui/themes'
import React from 'react'

const TodoFilterList = ({ todos }) => {
  return (
    <ul className='!space-y-2'>
      {todos.length ? (
        todos.map((todo, i) => (
          <li key={i} className='border border-gray-400 !p-2 rounded-md'>
            <Flex justify={'between'} align={'center'}>
              <Heading size={'3'}>{todo.title}</Heading>
              <Badge
                color={
                  todo.status === 'PENDING'
                    ? 'orange'
                    : todo.status === 'DONE'
                    ? 'green'
                    : 'red'
                }
              >
                {todo.status}
              </Badge>
            </Flex>
          </li>
        ))
      ) : (
        <p className='text-center italic text-gray-500'>No Todos found</p>
      )}
    </ul>
  )
}

export default TodoFilterList
