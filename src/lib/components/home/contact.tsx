import { Paper, Text, createStyles, Box } from '@mantine/core'
import { m as motion } from 'framer-motion'

import { slideY } from '$lib/animation/slide'
import ContactIconsList from '$lib/components/contact/contact-list'
import ContactForm from '$lib/components/contact/contact-form'
import Label from './label'

const useStyles = createStyles(theme => {
  const BREAKPOINT = theme.fn.smallerThan('sm')

  return {
    wrapper: {
      display: 'flex',
      backgroundColor:
        theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.white,
      borderRadius: theme.radius.lg,
      padding: 4,
      border: `1px solid ${
        theme.colorScheme === 'dark'
          ? theme.colors.dark[8]
          : theme.colors.gray[2]
      }`,

      [BREAKPOINT]: {
        flexDirection: 'column',
      },
    },

    contacts: {
      boxSizing: 'border-box',
      position: 'relative',
      borderRadius: theme.radius.lg - 2,
      backgroundImage: `radial-gradient(at 0% 100%,
            ${theme.colors[theme.primaryColor][8]} 0%,
            ${theme.colors[theme.primaryColor][8]} 20%,
            ${theme.colors[theme.primaryColor][7]} 20%,
            ${theme.colors[theme.primaryColor][7]} 40%,
            ${theme.colors[theme.primaryColor][6]} 40%,
            ${theme.colors[theme.primaryColor][6]} 60%,
            ${theme.colors[theme.primaryColor][5]} 60%,
            ${theme.colors[theme.primaryColor][5]} 80%,
            ${theme.colors[theme.primaryColor][4]} 80%,
            ${theme.colors[theme.primaryColor][4]} 100%)`,
      border: '1px solid transparent',
      padding: theme.spacing.xl,
      flex: '0 0 280px',

      [BREAKPOINT]: {
        marginBottom: theme.spacing.sm,
        paddingLeft: theme.spacing.md,
      },
    },

    title: {
      marginBottom: theme.spacing.xl * 1.5,

      [BREAKPOINT]: {
        marginBottom: theme.spacing.xl,
      },
    },
  }
})

type Props = {}

function Contact({}: Props) {
  const { classes } = useStyles()

  return (
    <Box id="contact">
      <Label title="Contact Us" />
      <Paper
        shadow="lg"
        radius="lg"
        component={motion.div}
        variants={slideY(20)}
        whileInView="show"
        viewport={{ once: true }}
      >
        <div className={classes.wrapper}>
          <div className={classes.contacts}>
            <Text
              size="lg"
              weight={700}
              className={classes.title}
              sx={theme => ({
                color: theme.white,
              })}
            >
              Contact information
            </Text>

            <ContactIconsList variant="white" />
          </div>

          <ContactForm />
        </div>
      </Paper>
    </Box>
  )
}

export default Contact
