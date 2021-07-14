import { EntityRepository, Repository } from 'typeorm';
import { TaskEntity } from './task.entity';
import { CreateTaskDto } from './dto/create-task.dto';
import { TaskStatus } from './task-status.enum';
import { GetTaskFilterDto } from './dto/get-task-filter.dto';
import { NotFoundException } from '@nestjs/common';

@EntityRepository(TaskEntity)
export class TaskRepository extends Repository<TaskEntity> {
  async getAllTasks(filterDto: GetTaskFilterDto): Promise<TaskEntity[]> {
    const { search, status } = filterDto;
    const query = this.createQueryBuilder('task');

    if (status) {
      query.andWhere('task.status = :status', { status: status });
    }

    if (search) {
      query.andWhere(
        'LOWER(task.title) LIKE LOWER(:search) OR ' +
          'LOWER(task.description) LIKE LOWER(:search)',
        { search: `%${search}%` },
      );
    }

    const tasks = await query.getMany();

    if (tasks.length === 0) {
      throw new NotFoundException(
        null,
        'Tarefa(s) não encontrada(s) para o(s) parâmetro(s) informado(s).',
      );
    }
    return await query.getMany();
  }

  async createTask(createTaskDto: CreateTaskDto): Promise<TaskEntity> {
    const { title, description } = createTaskDto;

    const taskCreate: TaskEntity = this.create({
      title,
      description,
      status: TaskStatus.OPEN,
    });
    return await this.save(taskCreate);
  }
}
