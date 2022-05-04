import { pageFade } from '$lib/animation/fade'
import {
  Avatar,
  Divider,
  Navbar,
  Indicator,
  Stack,
  Title,
  Text,
  Group,
  ScrollArea,
  ActionIcon,
  useMantineTheme,
  Mark,
} from '@mantine/core'
import { motion, useMotionValue, useTransform } from 'framer-motion'
import {
  BrandFacebook,
  BrandLinkedin,
  BrandTwitter,
  BrandTelegram,
  type Icon,
} from 'tabler-icons-react'

import { slideY, stagger } from '$lib/animation'
import HumanLanguageSkill from '../common/nav/human-language-skill'
import { Suspense } from 'react'
import Info from '../common/nav/info-item'

interface SocialIconProp {
  icon: Icon
  link?: string
  label?: string
}

const socialActions: SocialIconProp[] = [
  {
    icon: BrandFacebook,
  },
  {
    icon: BrandLinkedin,
  },
  {
    icon: BrandTwitter,
  },
  {
    icon: BrandTelegram,
  },
]

const MyNavbar = () => {
  const theme = useMantineTheme()
  return (
    <ScrollArea type="scroll" style={{ height: '100vh' }}>
      <Navbar width={{ base: 280 }} p="sm" py="xl">
        <Stack align="center">
          <motion.div variants={pageFade}>
            <Indicator
              inline
              size={20}
              offset={23}
              position="bottom-end"
              color="green"
              withBorder
            >
              <Avatar
                src="/images/rayat.jpg"
                alt="Me"
                radius={160}
                size={160}

                //   withPlaceholder
              />
            </Indicator>
          </motion.div>
          <Title order={4}>Zul Ikram Musaddik Rayat</Title>
          <Text variant="text" color="dimmed">
            Full-Stack Developer
          </Text>
          <motion.div variants={stagger}>
            <Group>
              {socialActions.map((s, index) => (
                <ActionIcon<typeof motion.a>
                  key={index}
                  color="primaryColor"
                  size="lg"
                  radius="xl"
                  variant="filled"
                  component={motion.a}
                  variants={slideY(10)}
                >
                  <s.icon
                    color={
                      theme.colorScheme === 'dark' ? theme.black : theme.white
                    }
                  />
                </ActionIcon>
              ))}
            </Group>
          </motion.div>
          <Divider my="sm" size="sm" style={{ alignSelf: 'stretch' }} />
          <Info />
          <Divider my="sm" size="sm" style={{ alignSelf: 'stretch' }} />
          <HumanLanguageSkill />
        </Stack>
      </Navbar>
    </ScrollArea>
  )
}

export default MyNavbar
