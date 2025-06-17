import { Button, Flex, Heading, TextArea, TextField } from '@radix-ui/themes'
import SelectStatus from './Select'

const TodosForm = () => {
  return (
    <div className='todo-form w-full border border-gray-400 rounded-md'>
      <Heading mb='5'>Todo List</Heading>
      <div className='!space-y-4'>
        <TextField.Root placeholder='Title' />
        <TextArea placeholder='Description' />
        <SelectStatus />
        <Flex gap='2'>
          <Button>Add</Button>
          <Button variant='outline'>Clear</Button>
        </Flex>
      </div>
    </div>
  )
}

export default TodosForm
