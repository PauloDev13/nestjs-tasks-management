import { TaskStatus } from '../tasks.model';
import { IsEnum, IsOptional, IsString } from 'class-validator';

export class GetTaskFilterDto {
  @IsOptional()
  @IsEnum(TaskStatus, {
    message: 'O Status deve ser OPEN ou IN_PROGRESS ou DONE,',
  })
  status?: TaskStatus;

  @IsOptional()
  @IsString({ message: 'Não são permitido valores numéricos.' })
  search?: string;
}
