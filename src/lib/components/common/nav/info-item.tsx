import { Mark, Navbar, Text } from '@mantine/core'

import { useGetMyInfoQuery } from '$graphql/generated'
import { MotionGroup, MotionStack, slideX, stagger } from '$lib/animation'

type Props = {
  label: string
  item: React.ReactChild
}

const InfoItem = ({ item, label }: Props) => {
  return (
    <MotionGroup position="apart" variants={slideX(10)}>
      <Mark
        color="primaryColor"
        sx={theme => ({
          paddingLeft: theme.spacing.xs - 4,
          paddingRight: theme.spacing.xs - 4,
        })}
      >
        <Text size="sm">{label}:</Text>
      </Mark>
      <Text size="sm">{item}</Text>
    </MotionGroup>
  )
}

const Info = () => {
  const [{ data }] = useGetMyInfoQuery()
  return (
    <Navbar.Section
      component={MotionStack}
      style={{ alignSelf: 'stretch' }}
      variants={stagger}
    >
      <InfoItem label="Age" item={data?.admin?.age!} />
      <InfoItem label="Residence" item={data?.admin?.residence!} />
      <InfoItem label="Freelance" item={data?.admin?.freelance!} />
      <InfoItem label="Address" item={data?.admin?.address!} />
    </Navbar.Section>
  )
}

export default Info
