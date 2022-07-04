import {
  DocumentRenderer,
  DocumentRendererProps,
} from '@keystone-6/document-renderer'
import { Card, Grid, Mark, Text, TypographyStylesProvider } from '@mantine/core'
import dayjs from 'dayjs'

type Props = {
  title?: string | null
  certificate?: string | null
  passed?: Date | null
  description: DocumentRendererProps['document']
}

const EducationCard = ({ title, certificate, passed, description }: Props) => {
  return (
    <Card component="article">
      <Grid columns={5}>
        <Grid.Col span={2}>
          <Text component="p" weight="bold" my={0}>
            {title}
          </Text>
          <Text size="xs">
            Passed: <Mark>{dayjs(passed).format('MMM DD, YYYY')}</Mark>
          </Text>
        </Grid.Col>
        <Grid.Col span={3}>
          <Text component="a" weight="bold" variant="link" href={certificate!}>
            Cetificate of Web Training
          </Text>
          <TypographyStylesProvider
            sx={{
              '& > ul': {
                overflow: 'hidden',
                textOverflow: 'ellipsis',
                msTextOverflow: 'ellipsis',
                WebkitLineClamp: 0,
                display: '-webkit-box',
                WebkitBoxOrient: 'vertical',
              },
              '& > p + ul': {
                display: 'none',
              },
              '& > p + p': {
                display: 'none',
              },
            }}
          >
            <DocumentRenderer document={description} />
          </TypographyStylesProvider>
        </Grid.Col>
      </Grid>
    </Card>
  )
}

export default EducationCard
