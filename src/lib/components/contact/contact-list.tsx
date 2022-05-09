import {
  createStyles,
  ThemeIcon,
  Text,
  Group,
  Box,
  Anchor,
  AnchorProps,
} from '@mantine/core'
import { Sun, Phone, MapPin, At } from 'tabler-icons-react'
import { m as motion } from 'framer-motion'

import { slideY } from '$lib/animation/slide'
import { stagger } from '$lib/animation/stagger'

type ContactIconVariant = 'white' | 'gradient'

interface ContactIconStyles {
  variant: ContactIconVariant
}

const useStyles = createStyles((theme, { variant }: ContactIconStyles) => ({
  wrapper: {
    display: 'flex',
    alignItems: 'center',
    color: theme.white,
    // backgroundColor: theme.colors[theme.primaryColor][6],
  },

  icon: {
    marginRight: theme.spacing.md,
    backgroundImage:
      variant === 'gradient'
        ? `linear-gradient(135deg, ${theme.colors[theme.primaryColor][4]} 0%, ${
            theme.colors[theme.primaryColor][6]
          } 100%)`
        : 'none',
    backgroundColor: 'transparent',
  },

  title: {
    color:
      variant === 'gradient'
        ? theme.colors.gray[6]
        : theme.colors[theme.primaryColor][0],
  },

  description: {
    color: variant === 'gradient' ? theme.black : theme.white,
  },
}))

interface ContactIconProps
  extends Omit<AnchorProps<typeof motion.a>, 'title' | 'variant'> {
  icon: React.FC<any>
  title: React.ReactNode
  description: React.ReactNode
  variant?: ContactIconVariant
}

function ContactIcon({
  icon: Icon,
  title,
  description,
  variant = 'gradient',
  className,
  ...others
}: ContactIconProps) {
  const { classes, cx } = useStyles({ variant }, { name: 'contact-list' })

  return (
    <Anchor
      className={cx(classes.wrapper, className)}
      underline={false}
      component={motion.a}
      variants={slideY(20)}
      {...others}
    >
      {variant === 'gradient' ? (
        <ThemeIcon size={40} radius="md" className={classes.icon}>
          <Icon size={24} />
        </ThemeIcon>
      ) : (
        <Box mr="md">
          <Icon size={24} />
        </Box>
      )}

      <div>
        <Text size="xs" className={classes.title}>
          {title}
        </Text>
        <Text className={classes.description}>{description}</Text>
      </div>
    </Anchor>
  )
}

interface ContactIconsListProps {
  data?: ContactIconProps[]
  variant?: ContactIconVariant
}

const MOCKDATA: ContactIconProps[] = [
  {
    title: 'Email',
    description: 'dev.rayat000@gmail.com',
    href: 'mailto:dev.rayat000@gmail.com',
    icon: At,
  },
  {
    title: 'Phone',
    description: '+880 (17) 41 891 955',
    href: 'call:+8801741891955',
    icon: Phone,
  },
  {
    title: 'Address',
    description: '844 Morris Park avenue',
    target: '_blank',
    href:
      'https://www.google.com/maps/search/' +
      encodeURIComponent('844 Morris Park avenue'),

    icon: MapPin,
  },
  { title: 'Working hours', description: '8 a.m. – 11 p.m.', icon: Sun },
]

export default function ContactIconsList({
  data = MOCKDATA,
  variant,
}: ContactIconsListProps) {
  const items = data.map((item, index) => (
    <ContactIcon key={item.href} variant={variant} {...item} />
  ))
  return (
    <motion.div variants={stagger}>
      <Group direction="column">{items}</Group>
    </motion.div>
  )
}
