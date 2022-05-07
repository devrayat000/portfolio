import { useGetProgrammingLanguageSkillsQuery } from '$graphql/generated'
import { slideX, stagger } from '$lib/animation'
import { Group, Navbar, Text } from '@mantine/core'
import { m as motion } from 'framer-motion'

import LanguageSkill from './language-skill'

type Props = {}

const ProgrammingLanguageSkill = (props: Props) => {
  const [{ data }] = useGetProgrammingLanguageSkillsQuery()

  return (
    <Navbar.Section
      component={Group}
      direction="column"
      align="stretch"
      style={{ alignSelf: 'stretch' }}
    >
      <Text variant="text" size="xl">
        Skills
      </Text>
      <motion.div
        style={{ alignSelf: 'stretch' }}
        variants={stagger}
        //   initial="hidden"
        //   animate="show"
      >
        <Group
          direction="column"
          align="stretch"
          style={{ alignSelf: 'stretch' }}
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
        </Group>
      </motion.div>
    </Navbar.Section>
  )
}

export default ProgrammingLanguageSkill
