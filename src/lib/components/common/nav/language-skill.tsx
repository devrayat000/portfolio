import { Group, Text, useMantineTheme } from '@mantine/core'
import { motion } from 'framer-motion'
import ProgressBar from '../progress'

type Props = {
  label: string
  value: number
}

const LanguageSkill = ({ label, value }: Props) => {
  const theme = useMantineTheme()

  return (
    <Group direction="column" style={{ alignItems: 'stretch' }}>
      <Group position="apart">
        <Text>{label}</Text>
        <Text>{value}%</Text>
      </Group>
      <div>
        <ProgressBar
          color={theme.primaryColor}
          size="sm"
          radius="sm"
          value={value}
        />
      </div>
    </Group>
  )
}

export default LanguageSkill
