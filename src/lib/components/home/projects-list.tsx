import {
  Text,
  AspectRatio,
  Card,
  Group,
  Button,
  Stack,
  TypographyStylesProvider,
  createStyles,
} from '@mantine/core'
import { DocumentRenderer } from '@keystone-6/document-renderer'
import Image from 'next/image'

import { type Project, useGetProjectsQuery } from '$graphql/generated'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { stagger } from '$lib/animation/stagger'
import { slideY } from '$lib/animation/slide'
import ProjectCard from './peoject-card'
// import { useGetProjectsQuery } from '$graphql/query-types-hooks'

type Props = {}

const useStyles = createStyles(theme => ({
  projectGrid: {
    display: 'grid',
    gap: theme.spacing.sm,
    gridTemplateColumns: 'repeat(1, minmax(0, 1fr))',
    [`@media (min-width: ${theme.breakpoints.md}px)`]: {
      gridTemplateColumns: 'repeat(2, minmax(0, 1fr))',
    },
    [`@media (min-width: ${theme.breakpoints.lg}px)`]: {
      gridTemplateColumns: 'repeat(3, minmax(0, 1fr))',
    },
  },
}))

const ProjectsList = () => {
  const [{ data }] = useGetProjectsQuery()

  const { classes } = useStyles()

  return (
    <motion.div
      variants={stagger}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      className={classes.projectGrid}
    >
      {data?.projects?.map(project => {
        return <ProjectCard key={project.id} project={project as Project} />
      })}
    </motion.div>
  )
}

export default ProjectsList
