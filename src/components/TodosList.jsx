import { Badge, Button, Flex, Heading } from '@radix-ui/themes'
import React, { useEffect } from 'react'
import { useTodos } from '../store/todosStore'
import { useQuery } from '@tanstack/react-query'
import axios from 'axios'

const TodosList = () => {
  // const todos = [
  //   {
  //     id: 1,
  //     title: 'Code something',
  //     description: 'Tomorrow i have to code alot of things inshallah',
  //     status: 'PENDING',
  //   },
  //   {
  //     id: 2,
  //     title: 'Another todo',
  //     description: 'Tomorrow i have to code alot of things inshallah',
  //     status: 'DONE',
  //   },
  // ]

  const todos = useTodos((state) => state.todos)
  const addTodo = useTodos((state) => state.addTodo)
  const removeTodo = useTodos((state) => state.removeTodo)

  const getTodos = async () => {
    const res = await axios.get('https://jsonplaceholder.typicode.com/todos')
    const data = res.data

    // console.log({ data })
    return data
  }

  const { isPending, data: todo } = useQuery({
    queryKey: ['todos'],
    queryFn: getTodos,
  })

  useEffect(() => {
    if (todo) {
      const slicedTodos = todo.slice(10, 20)
      const statusOptions = ['PENDING', 'DONE', 'DENIED']
      slicedTodos.forEach((td) => {
        const randomNumber = Math.floor(Math.random() * statusOptions.length)
        addTodo({
          id: td.id,
          title: td.title,
          description: 'No description provided',
          status: statusOptions[randomNumber],
        })
      })
    }
  }, [todo, addTodo])

  return isPending ? (
    <p className='text-center italic text-gray-500'>Loading ...</p>
  ) : (
    <ul className='!mt-5 !space-y-3'>
      {todos.length ? (
        todos.map((todo, i) => (
          <li key={todo.id} className='border border-gray-400 rounded-md !p-3'>
            <div className='flex justify-between items-center'>
              <div className='flex gap-3'>
                <p>{i + 1}.</p>
                <div>
                  <Flex gap='3' align='center'>
                    <Heading size='4'>{todo.title}</Heading>
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
                  <p className='text-gray-500'>{todo.description}</p>
                </div>
              </div>
              <div className='!space-x-3'>
                <Button>Edit</Button>
                <Button color='red' onClick={() => removeTodo(todo.id)}>
                  Delete
                </Button>
              </div>
            </div>
          </li>
        ))
      ) : (
        <p className='text-center italic text-gray-500'>No Todos found</p>
      )}
    </ul>
  )
}

export default TodosList
