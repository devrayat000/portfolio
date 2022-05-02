import {
  Box,
  Title,
  Text,
  SimpleGrid,
  Paper,
  Center,
  //   Image,
  AspectRatio,
  Card,
  Group,
  Button,
  Stack,
  TypographyStylesProvider,
} from '@mantine/core'
import { DocumentRenderer } from '@keystone-6/document-renderer'
import Image from 'next/image'
import { Badge } from 'tabler-icons-react'

import { useGetProjectsQuery } from '$graphql/generated'
import Link from 'next/link'

type Props = {}

const Projects = (props: Props) => {
  const [{ data, error, fetching }] = useGetProjectsQuery()

  if (error) {
    return <h1>{error.message}</h1>
  }
  return (
    <Box>
      <Title order={2} align="center">
        Projects
      </Title>
      <Center inline>
        <Text
          component="p"
          align="center"
          color="dimmed"
          sx={{
            maxWidth: '50%',
          }}
        >
          Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
          sint. Velit officia consequat duis enim velit mollit. lorem ipsum
        </Text>
      </Center>
      {fetching ? (
        <h1>Loading</h1>
      ) : (
        <SimpleGrid
          breakpoints={[
            { minWidth: 'sm', cols: 1 },
            { minWidth: 'md', cols: 2 },
            { minWidth: 'lg', cols: 3 },
          ]}
        >
          {data?.projects?.map(project => {
            const image = project.images?.at(0)
            return (
              <Card key={project.id} shadow="sm" p="lg">
                <Card.Section>
                  <AspectRatio ratio={3 / 2} sx={{ position: 'relative' }}>
                    <Image
                      src={image?.image?.url!}
                      alt={image?.label!}
                      layout="fill"
                      objectFit="cover"
                    />
                  </AspectRatio>
                </Card.Section>

                <Group
                  position="apart"
                  sx={theme => ({
                    marginBottom: 5,
                    marginTop: theme.spacing.sm,
                  })}
                >
                  <Text weight={500}>{project.title}</Text>
                </Group>

                <TypographyStylesProvider
                  sx={{
                    '& > *': {
                      overflow: 'hidden',
                      textOverflow: 'ellipsis',
                      msTextOverflow: 'ellipsis',
                      WebkitLineClamp: 1,
                      display: '-webkit-box',
                      WebkitBoxOrient: 'vertical',
                    },
                  }}
                >
                  <DocumentRenderer document={project.description?.document} />
                </TypographyStylesProvider>

                <Stack spacing="xs">
                  {project.demo && (
                    <Link href={project.demo} passHref>
                      <Button<'a'>
                        component="a"
                        variant="outline"
                        // color="blue"
                        fullWidth
                        target="_blank"
                      >
                        Watch Demo
                      </Button>
                    </Link>
                  )}
                  {project.source && (
                    <Link href={project.source} passHref>
                      <Button<'a'>
                        component="a"
                        variant="light"
                        // color="blue"
                        fullWidth
                        target="_blank"
                      >
                        View Source Code
                      </Button>
                    </Link>
                  )}
                </Stack>
              </Card>
              //   <Paper key={project.id} shadow="xs">
              //     <AspectRatio ratio={3 / 2} sx={{ position: 'relative' }}>
              //       <Image
              //         src={image?.image?.url!}
              //         alt={image?.label!}
              //         layout="fill"
              //         objectFit="cover"
              //       />
              //     </AspectRatio>
              //   </Paper>
            )
          })}
        </SimpleGrid>
      )}
    </Box>
  )
}

export default Projects
