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
  ActionIcon,
  useMantineTheme,
} from '@mantine/core'
import { motion, useMotionValue, useTransform } from 'framer-motion'
import {
  BrandFacebook,
  BrandLinkedin,
  BrandTwitter,
  BrandTelegram,
  type Icon,
} from 'tabler-icons-react'

interface SocialIconProp {
  icon: Icon
  link?: string
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
    <Navbar width={{ base: 280 }} p="sm">
      {/* <Center> */}
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
        <Group>
          {socialActions.map((s, index) => (
            <ActionIcon
              key={index}
              color="primaryColor"
              size="lg"
              radius="xl"
              variant="filled"
            >
              <s.icon
                color={theme.colorScheme === 'dark' ? theme.black : theme.white}
              />
            </ActionIcon>
          ))}
        </Group>
        <Divider my="sm" size="sm" style={{ alignSelf: 'stretch' }} />
      </Stack>
      {/* </Center> */}
    </Navbar>
  )
}

export default MyNavbar
