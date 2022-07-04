import { Button, Center, Group, Text } from '@mantine/core'

type Props = {
  message?: string
  retry?: () => void
}

function ErrorHandler({ message, retry }: Props) {
  return (
    <Center>
      <Group>
        <Text color="red">{message ?? 'Unfortunate error occured!'}</Text>
        {retry && (
          <Button color="red" variant="outline" onClick={retry}>
            Retry
          </Button>
        )}
      </Group>
    </Center>
  )
}

export default ErrorHandler
