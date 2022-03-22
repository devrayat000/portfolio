import {
  BaseEntity,
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryColumn,
} from 'typeorm'

import Project from './project'
import type { Image as IImage } from '$graphql/generated'

@Entity('image')
export default class Image extends BaseEntity implements IImage {
  @PrimaryColumn('uuid', { generated: 'uuid', insert: false, update: false })
  _id: string

  @Column({ type: 'uuid', name: 'project_id', update: false })
  projectId: string

  @Column('varchar')
  name: string

  @Column('varchar')
  url: string

  @Column('varchar')
  mimetype: string

  @Column('varchar')
  encoding: string

  @Column({
    type: 'varchar',
    name: 'alt_text',
  })
  altText: string

  @CreateDateColumn({ name: 'created_at', insert: false, update: false })
  createdAt: Date

  @ManyToOne(() => Project, project => project.images, {
    createForeignKeyConstraints: true,
    onDelete: 'CASCADE',
  })
  @JoinColumn({ name: 'project_id' })
  project: Project
}
