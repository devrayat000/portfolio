import {
  Paper,
  Text,
  TextInput,
  Textarea,
  Button,
  Group,
  SimpleGrid,
  createStyles,
} from '@mantine/core'
import { m as motion } from 'framer-motion'
import { Send } from 'tabler-icons-react'
import { type GetStaticProps } from 'next'

import { pageFade } from '$lib/animation/fade'
import { slideX, slideY } from '$lib/animation/slide'
import ContactIconsList from '$lib/components/contact/contact-list'

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

    form: {
      boxSizing: 'border-box',
      flex: 1,
      padding: theme.spacing.xl,
      paddingLeft: theme.spacing.xl * 2,
      borderLeft: 0,

      [BREAKPOINT]: {
        padding: theme.spacing.md,
        paddingLeft: theme.spacing.md,
      },
    },

    fields: {
      marginTop: -12,
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

    control: {
      [BREAKPOINT]: {
        flex: 1,
      },
    },
  }
})

export default function ContactPage() {
  const { classes } = useStyles()

  return (
    <motion.main
      variants={pageFade}
      initial="hidden"
      animate="show"
      exit="hidden"
    >
      <Paper
        shadow="lg"
        radius="lg"
        component={motion.div}
        variants={slideY(20)}
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

          <form
            className={classes.form}
            onSubmit={event => event.preventDefault()}
          >
            <Text size="lg" weight={700} className={classes.title}>
              Get in touch
            </Text>

            <div className={classes.fields}>
              <SimpleGrid cols={2} breakpoints={[{ maxWidth: 'sm', cols: 1 }]}>
                <TextInput label="Your name" placeholder="Your name" />
                <TextInput
                  label="Your email"
                  placeholder="hello@mantine.dev"
                  required
                />
              </SimpleGrid>

              <TextInput
                mt="md"
                label="Subject"
                placeholder="Subject"
                required
              />

              <Textarea
                mt="md"
                label="Your message"
                placeholder="Please include all relevant information"
                minRows={3}
              />

              <Group position="right" mt="md">
                <Button
                  type="submit"
                  className={classes.control}
                  rightIcon={
                    <Send size={20} style={{ transform: 'rotate(45deg)' }} />
                  }
                  component={motion.button}
                  variants={slideX(-20)}
                >
                  Send message
                </Button>
              </Group>
            </div>
          </form>
        </div>
      </Paper>
    </motion.main>
  )
}

export const getStaticProps: GetStaticProps = async context => {
  return {
    props: {},
  }
}
