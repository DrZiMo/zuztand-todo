import {
  Button,
  Flex,
  Heading,
  Select,
  TextArea,
  TextField,
} from '@radix-ui/themes'
import { useTodos } from '../store/todosStore'
import { useState } from 'react'

const TodosForm = () => {
  const addTodo = useTodos((state) => state.addTodo)
  const todos = useTodos((state) => state.todos)
  const statusValues = ['PENDING', 'DONE', 'DENIED']

  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [status, setStatus] = useState(statusValues[0])

  console.log(todos)

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!title) return
    const newTodo = {
      id: Date.now(),
      title,
      description,
      status,
    }

    addTodo(newTodo)
    clearValues()
  }

  const clearValues = () => {
    setTitle('')
    setDescription('')
    setStatus(statusValues[0])
  }

  return (
    <div className='todo-form w-full border border-gray-400 rounded-md'>
      <Heading mb='5'>Todo List</Heading>
      <form onSubmit={handleSubmit} className='!space-y-4'>
        <TextField.Root
          placeholder='Title'
          name='title'
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <TextArea
          placeholder='Description'
          name='description'
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <Select.Root
          name='status'
          value={status}
          onValueChange={(value) => setStatus(value)}
        >
          <Select.Trigger />
          <Select.Content>
            <Select.Group>
              <Select.Label>Status</Select.Label>
              {statusValues.map((st, i) => (
                <Select.Item value={st} key={i}>
                  {st}
                </Select.Item>
              ))}
            </Select.Group>
          </Select.Content>
        </Select.Root>
        <Flex gap='2'>
          <Button type='submit'>Add</Button>
          <Button variant='outline' onClick={clearValues} type='button'>
            Clear
          </Button>
        </Flex>
      </form>
    </div>
  )
}

export default TodosForm
