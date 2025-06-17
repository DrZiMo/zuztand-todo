import { Select } from '@radix-ui/themes'

const SelectStatus = () => {
  const status = ['PENDING', 'DONE', 'DENIED']
  return (
    <div>
      <Select.Root defaultValue={status[0]}>
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
    </div>
  )
}

export default SelectStatus
