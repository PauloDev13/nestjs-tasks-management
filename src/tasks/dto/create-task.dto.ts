import { IsNotEmpty } from 'class-validator';

export class CreateTaskDto {
  @IsNotEmpty({ message: 'Informe o título da tarefa.' })
  title: string;

  @IsNotEmpty({ message: 'Informe a descrição da tarefa.' })
  description: string;
}
