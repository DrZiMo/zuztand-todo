import {
  Button,
  Flex,
  Heading,
  Select,
  TextArea,
  TextField,
} from '@radix-ui/themes'
import { useTodos } from '../store/todosStore'
import { useFormik } from 'formik'

const TodosForm = () => {
  const addTodo = useTodos((state) => state.addTodo)
  const todos = useTodos((state) => state.todos)
  const status = ['PENDING', 'DONE', 'DENIED']

  console.log(todos)

  const formik = useFormik({
    initialValues: {
      id: Date.now(),
      title: '',
      description: '',
      status: status[0],
    },

    onSubmit: (values) => {
      addTodo({ ...values, id: Date.now() })
      clearValues()
    },
  })

  const clearValues = () => {
    formik.resetForm({
      values: {
        title: '',
        description: '',
        status: status[0],
      },
    })
  }

  return (
    <div className='todo-form w-full border border-gray-400 rounded-md'>
      <Heading mb='5'>Todo List</Heading>
      <form onSubmit={formik.handleSubmit} className='!space-y-4'>
        <TextField.Root
          placeholder='Title'
          name='title'
          value={formik.values.title}
          onChange={formik.handleChange}
        />
        <TextArea
          placeholder='Description'
          name='description'
          value={formik.values.description}
          onChange={formik.handleChange}
        />
        <Select.Root
          name='status'
          value={formik.values.status}
          onValueChange={(value) => formik.setFieldValue('status', value)}
        >
          <Select.Trigger />
          <Select.Content>
            <Select.Group>
              <Select.Label>Status</Select.Label>
              {status.map((st, i) => (
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
