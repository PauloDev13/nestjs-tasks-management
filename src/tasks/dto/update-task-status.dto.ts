import { TaskStatus } from '../tasks.model';
import { IsEnum } from 'class-validator';

export class UpdateTaskStatusDto {
  @IsEnum(TaskStatus, {
    message: 'O Status deve ser OPEN ou IN_PROGRESS ou DONE',
  })
  status: TaskStatus;
}
