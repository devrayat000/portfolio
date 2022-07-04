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
import { MotionGroup } from '$lib/animation'

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
      whileInView="show"
      viewport={{ once: true }}
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

const formatter =
  /^(?<country>\+880)(?<operator>\d{2})(?<leading>\d{2})(?<trailing_1>\d{3})(?<trailing_2>\d{3})/

const MOCKDATA: ContactIconProps[] = [
  {
    title: 'Email',
    description: 'dev.rayat000@gmail.com',
    href: 'mailto:dev.rayat000@gmail.com',
    icon: At,
  },
  {
    title: 'Phone',
    description: '+8801741891955'.replace(formatter, '$1 ($2) $3 $4 $5'),
    href: 'call:+8801741891955',
    icon: Phone,
  },
  {
    title: 'Address',
    description: 'BUET Central Road, Dhaka',
    target: '_blank',
    href:
      'https://www.google.com/maps/search/' +
      encodeURIComponent('BUET Central Road, Dhaka'),

    icon: MapPin,
  },
]

export default function ContactIconsList({
  data = MOCKDATA,
  variant,
}: ContactIconsListProps) {
  const items = data.map((item, index) => (
    <ContactIcon key={item.href} variant={variant} {...item} />
  ))
  return (
    <MotionGroup
      variants={stagger}
      whileInView="show"
      viewport={{ once: true }}
      direction="column"
    >
      {items}
    </MotionGroup>
  )
}
