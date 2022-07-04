import {
  Button,
  createStyles,
  Group,
  SimpleGrid,
  Text,
  Textarea,
  TextInput,
} from '@mantine/core'
import { useForm } from '@mantine/hooks'
import { showNotification } from '@mantine/notifications'
import { m } from 'framer-motion'
import { Send, Cross as Cross1Icon } from 'tabler-icons-react'
import * as isEmail from 'is-it-email'

import { slideX } from '$lib/animation'

type Props = {}

interface ContactInfo {
  name: string
  email: string
  subject: string
  message: string
}

const contactMe = async (data: ContactInfo) => {
  try {
    const res = await fetch('/api/mail', {
      method: 'POST',
      headers: { 'Content-Type:': 'application/json' },
      mode: 'same-origin',
      body: JSON.stringify(data),
    })
    const { id } = await res.json()

    showNotification({
      id,
      disallowClose: false,
      onClose: () => console.log('unmounted'),
      onOpen: () => console.log('mounted'),
      autoClose: 2000,
      title: 'Successfully sent.',
      message: 'Your response was sent using email!',
      color: 'green',
      icon: <Cross1Icon />,
      className: 'my-notification-success-class',
      style: { backgroundColor: 'green' },
      sx: { backgroundColor: 'green' },
      loading: false,
    })
  } catch (error) {
    showNotification({
      id: 'error',
      disallowClose: false,
      onClose: () => console.log('unmounted'),
      onOpen: () => console.log('mounted'),
      autoClose: 2000,
      title: 'Error sending mail!',
      message: 'The server did not respont to your request!',
      color: 'red',
      icon: <Cross1Icon />,
      className: 'my-notification-error-class',
      style: { backgroundColor: 'red' },
      sx: { backgroundColor: 'red' },
      loading: false,
    })
  }
}

const useStyles = createStyles(theme => {
  const BREAKPOINT = theme.fn.smallerThan('sm')

  return {
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

const ContactForm = (props: Props) => {
  const { classes } = useStyles()

  const { getInputProps, onSubmit, errors } = useForm<ContactInfo>({
    initialValues: {
      name: '',
      email: '',
      subject: '',
      message: '',
    },
    errorMessages: {
      name: 'Name Should be atleast 6 characters!',
      email: 'Invalid e-mail!',
      subject: 'Subject is required!',
      message: 'Message should be between 50 to 200 characters!',
    },
    validationRules: {
      name: value => value.trim().length >= 6,
      email: value => isEmail.validate(value),
      subject: value => value.trim().length > 0,
      message: value => value.trim().length >= 50 && value.length <= 200,
    },
  })

  return (
    <form className={classes.form} onSubmit={onSubmit(contactMe)}>
      <Text size="lg" weight={700} className={classes.title}>
        Get in touch
      </Text>

      <div className={classes.fields}>
        <SimpleGrid cols={2} breakpoints={[{ maxWidth: 'sm', cols: 1 }]}>
          <TextInput
            label="Your name"
            placeholder="Your name"
            required
            minLength={6}
            {...getInputProps('name')}
          />
          <TextInput
            label="Your email"
            placeholder="hello@mantine.dev"
            required
            {...getInputProps('email')}
          />
        </SimpleGrid>

        <TextInput
          mt="md"
          label="Subject"
          placeholder="Subject"
          required
          {...getInputProps('subject')}
        />

        <Textarea
          mt="md"
          label="Your message"
          placeholder="Please include all relevant information"
          minRows={3}
          required
          minLength={50}
          maxLength={200}
          {...getInputProps('message')}
        />

        <Group position="right" mt="md">
          <Button
            type="submit"
            className={classes.control}
            rightIcon={
              <Send size={20} style={{ transform: 'rotate(45deg)' }} />
            }
            component={m.button}
            variants={slideX(-20)}
            disabled={
              !!errors.email ||
              !!errors.name ||
              !!errors.subject ||
              !!errors.message
            }
          >
            Send message
          </Button>
        </Group>
      </div>
    </form>
  )
}

export default ContactForm
