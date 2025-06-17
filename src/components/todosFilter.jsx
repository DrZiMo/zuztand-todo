import { Box, Tabs, Text } from '@radix-ui/themes'

const TodosFilter = () => {
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
            <Text size='2'>Make changes to your account.</Text>
          </Tabs.Content>

          <Tabs.Content value='done'>
            <Text size='2'>Access and update your documents.</Text>
          </Tabs.Content>

          <Tabs.Content value='denied'>
            <Text size='2'>
              Edit your profile or update contact information.
            </Text>
          </Tabs.Content>
        </Box>
      </Tabs.Root>
    </div>
  )
}

export default TodosFilter
