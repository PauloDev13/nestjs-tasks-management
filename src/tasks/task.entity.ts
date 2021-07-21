import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Exclude } from 'class-transformer';

import { TaskStatus } from './task-status.enum';
import { UserEntity } from '../auth/user.entity';

@Entity({ name: 'tasks' })
export class TaskEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  title: string;

  @Column()
  description: string;

  @Column()
  status: TaskStatus;

  @ManyToOne(() => UserEntity, user => user.tasks, {
    eager: false,
    nullable: false,
  })
  @Exclude({ toPlainOnly: true })
  user: UserEntity;
}
