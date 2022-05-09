import { Group, Navbar, Text } from '@mantine/core'
import { m as motion } from 'framer-motion'

import { useGetHumanLanguageSkillsQuery } from '$graphql/generated'
import { MotionGroup, slideX, stagger } from '$lib/animation'
import LanguageSkill from './language-skill'

type Props = {}

const HumanLanguageSkill = (props: Props) => {
  const [{ data }] = useGetHumanLanguageSkillsQuery()

  return (
    <Navbar.Section
      component={Group}
      direction="column"
      align="stretch"
      style={{ alignSelf: 'stretch' }}
    >
      <Text variant="text" size="xl">
        Languages
      </Text>
      <MotionGroup
        direction="column"
        align="stretch"
        style={{ alignSelf: 'stretch' }}
        variants={stagger}
      >
        {data?.languageSkills?.map((skill, i) => (
          <motion.div
            key={skill.id}
            style={{ alignItems: 'stretch' }}
            variants={slideX(i % 2 === 0 ? -20 : 20)}
          >
            <LanguageSkill label={skill.language!} value={skill.value!} />
          </motion.div>
        ))}
      </MotionGroup>
    </Navbar.Section>
  )
}

export default HumanLanguageSkill
