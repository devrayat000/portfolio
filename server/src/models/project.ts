import {
  BaseEntity,
  Column,
  CreateDateColumn,
  Entity,
  Index,
  OneToMany,
  PrimaryColumn,
} from 'typeorm'

import Image from './image'
import type { Project as IProject } from '$graphql/generated'

@Entity('project')
export default class Project extends BaseEntity implements IProject {
  @PrimaryColumn('uuid', { generated: 'uuid', insert: false, update: false })
  _id: string

  @Column('varchar')
  title: string

  @Column('varchar', { unique: true })
  @Index('project_slug_index', { unique: true })
  slug: string

  @Column('text')
  description: string

  @Column('varchar', { name: 'source_code' })
  sourceCode: string

  @Column('varchar', { nullable: true })
  demo: string | null

  @CreateDateColumn({ name: 'created_at', insert: false, update: false })
  createdAt: Date

  @OneToMany(() => Image, image => image.project)
  images: Image[]
}
