import { Box, Paper, Stack } from '@mantine/core'

import { useGetMyEducationQuery } from '$graphql/generated'
import ErrorHandler from '../common/error-handler'
import EducationCard from './education-card'
import Label from './label'

type Props = {}

const Education = (props: Props) => {
  const [{ data, error }, retry] = useGetMyEducationQuery()

  return (
    <Box id="education">
      <Label
        title="Education"
        subtitle="Certifications I achieved from popular online learning platform such as Coursera, edX, Udemy etc."
      />

      <Stack>
        <Paper>
          {error && <ErrorHandler message={error.message} retry={retry} />}
          {data?.educations?.map(education => {
            return (
              <EducationCard
                key={education.id}
                {...education}
                description={education.description?.document}
              />
            )
          })}
        </Paper>
      </Stack>
    </Box>
  )
}

export default Education
