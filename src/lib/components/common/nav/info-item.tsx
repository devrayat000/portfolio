import { Group, Mark, Stack, Text } from '@mantine/core'
import { useGetMyInfoQuery } from '$graphql/generated'

type Props = {
  label: string
  item: React.ReactChild
}

const InfoItem = ({ item, label }: Props) => {
  return (
    <Group position="apart">
      <Mark
        color="primaryColor"
        sx={theme => ({
          paddingLeft: theme.spacing.xs - 4,
          paddingRight: theme.spacing.xs - 4,
        })}
      >
        {label}:
      </Mark>
      <Text>{item}</Text>
    </Group>
  )
}

const Info = () => {
  const [{ data }] = useGetMyInfoQuery()
  return (
    <Stack align="stretch" style={{ alignSelf: 'stretch' }}>
      <InfoItem label="Age" item={data?.admin?.age!} />
      <InfoItem label="Residence" item={data?.admin?.residence!} />
      <InfoItem label="Freelance" item={data?.admin?.freelance!} />
      <InfoItem label="Address" item={data?.admin?.address!} />
    </Stack>
  )
}

export default Info
