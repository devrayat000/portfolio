import { pageFade } from '$lib/animation/fade'
import {
  Avatar,
  Divider,
  Navbar,
  Indicator,
  Title,
  Text,
  Group,
  ScrollArea,
  ActionIcon,
  useMantineTheme,
  Button,
} from '@mantine/core'
import { m as motion } from 'framer-motion'
import {
  BrandFacebook,
  BrandLinkedin,
  BrandTwitter,
  BrandTelegram,
  Download,
  type Icon,
} from 'tabler-icons-react'

import { MotionStack, slideY, stagger } from '$lib/animation'
import HumanLanguageSkill from './human-language-skill'
import Info from './info-item'
import ProgrammingLanguageSkill from './programming-language-skill'

interface SocialIconProp {
  icon: Icon
  href?: string
  label?: string
}

const socialActions: SocialIconProp[] = [
  {
    icon: BrandFacebook,
    href: 'https://www.facebook.com/rayat.ass',
  },
  {
    icon: BrandLinkedin,
    href: 'https://www.linkedin.com/in/musaddik-rayat',
  },
  {
    icon: BrandTwitter,
  },
  {
    icon: BrandTelegram,
    href: 'https://t.me/rayat_69',
  },
]

const MyNavbar = () => {
  const theme = useMantineTheme()

  const divider = <Divider my="sm" size="sm" style={{ alignSelf: 'stretch' }} />

  return (
    <Navbar
      hiddenBreakpoint="md"
      width={{ base: 280 }}
      sx={{ minHeight: '100vh' }}
      hidden
    >
      <Navbar.Section
        grow
        component={ScrollArea}
        type="scroll"
        offsetScrollbars
        p="sm"
      >
        <MotionStack
          align="center"
          py="xl"
          initial="hidden"
          animate="show"
          exit="hidden"
        >
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
                  href={s.href}
                  target="_blank"
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
          {divider}
          <Info />
          {divider}
          <HumanLanguageSkill />
          {divider}
          <ProgrammingLanguageSkill />
        </MotionStack>
      </Navbar.Section>

      <Navbar.Section px="sm" pb="xl">
        <Button
          component="a"
          href="/assets/portfolio.pdf"
          rightIcon={<Download />}
          fullWidth
        >
          Download CV
        </Button>
      </Navbar.Section>
    </Navbar>
  )
}

export default MyNavbar
