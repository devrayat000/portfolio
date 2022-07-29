import {
  Text,
  TextInput,
  Textarea,
  Button,
  Group,
  SimpleGrid,
  createStyles,
  Stack,
  ThemeIcon,
  Box,
} from "@mantine/core";
import { IconLocation, IconMail, IconPhone } from "@tabler/icons";
import SectionWrapper from "./wrapper";

const useStyles = createStyles((theme) => {
  const BREAKPOINT = theme.fn.smallerThan("sm");

  return {
    wrapper: {
      display: "flex",
      backgroundColor:
        theme.colorScheme === "dark" ? theme.colors.dark[8] : theme.white,
      padding: 4,
      marginTop: theme.spacing.xl,

      [BREAKPOINT]: {
        flexDirection: "column",
      },
    },

    form: {
      boxSizing: "border-box",
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

    fieldInput: {
      flex: 1,

      "& + &": {
        marginLeft: theme.spacing.md,

        [BREAKPOINT]: {
          marginLeft: 0,
          marginTop: theme.spacing.md,
        },
      },
    },

    fieldsGroup: {
      display: "flex",

      [BREAKPOINT]: {
        flexDirection: "column",
      },
    },

    contacts: {
      boxSizing: "border-box",
      position: "relative",
      padding: theme.spacing.xl,
      flex: "0 0 320px",

      [BREAKPOINT]: {
        marginBottom: theme.spacing.sm,
        paddingLeft: theme.spacing.md,
      },
    },

    title: {
      fontFamily: `Greycliff CF, ${theme.fontFamily}`,
      fontWeight: 600,
    },

    control: {
      [BREAKPOINT]: {
        flex: 1,
      },
    },
  };
});

export default function GetInTouch() {
  const { classes } = useStyles();

  return (
    <SectionWrapper subtitle="Contact Me" title="Get In Touch" id="contact">
      <div className={classes.wrapper}>
        <form className={classes.form}>
          <div className={classes.fields}>
            <SimpleGrid cols={2} breakpoints={[{ maxWidth: "sm", cols: 1 }]}>
              <TextInput label="Your name" placeholder="Your name" />
              <TextInput
                label="Your email"
                placeholder="hello@mantine.dev"
                required
              />
            </SimpleGrid>

            <TextInput mt="md" label="Subject" placeholder="Subject" required />

            <Textarea
              mt="md"
              label="Your message"
              placeholder="Please include all relevant information"
              minRows={3}
            />

            <Group position="left" mt="md">
              <Button type="submit" className={classes.control}>
                Send message
              </Button>
            </Group>
          </div>
        </form>

        <Stack className={classes.contacts} spacing="xl">
          <Group align="flex-start">
            <ThemeIcon size="xl" radius="xl">
              <IconPhone />
            </ThemeIcon>
            <Box>
              <Text size="lg" className={classes.title}>
                Call Me
              </Text>
              <Text size="sm">+8801741891955</Text>
            </Box>
          </Group>
          <Group align="flex-start">
            <ThemeIcon size="xl" radius="xl">
              <IconMail />
            </ThemeIcon>
            <Box>
              <Text size="lg" className={classes.title}>
                Email
              </Text>
              <Text size="sm">dev.rayat000@gmail.com</Text>
            </Box>
          </Group>
          <Group align="flex-start">
            <ThemeIcon size="xl" radius="xl">
              <IconLocation />
            </ThemeIcon>
            <Box>
              <Text size="lg" className={classes.title}>
                Location
              </Text>
              <Text size="sm">BUET Central Road, Dhaka-1205</Text>
            </Box>
          </Group>
        </Stack>
      </div>
    </SectionWrapper>
  );
}
