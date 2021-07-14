import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

import { TaskRepository } from './task.repository';

import { TaskStatus } from './task-status.enum';
import { CreateTaskDto } from './dto/create-task.dto';
import { GetTaskFilterDto } from './dto/get-task-filter.dto';
import { TaskEntity } from './task.entity';

@Injectable()
export class TasksService {
  constructor(
    @InjectRepository(TaskRepository)
    private taskRepository: TaskRepository,
  ) {}

  getAllTasks(filterDto: GetTaskFilterDto): Promise<TaskEntity[]> {
    return this.taskRepository.getAllTasks(filterDto);
  }

  async getTaskById(id: string): Promise<TaskEntity> {
    const taskFound = await this.taskRepository.findOne(id);

    if (!taskFound) {
      throw new NotFoundException(
        null,
        `Tarefa não encontrada para o ID: ${id}`,
      );
    }
    return taskFound;
  }

  createTask(createTaskDto: CreateTaskDto): Promise<TaskEntity> {
    return this.taskRepository.createTask(createTaskDto);
  }

  async deleteTask(id: string): Promise<void> {
    const result = await this.taskRepository.delete(id);

    if (result.affected === 0) {
      throw new NotFoundException(
        null,
        `Tarefa não encontrada para o ID: ${id}`,
      );
    }
  }

  async updateTaskStatus(id: string, status: TaskStatus): Promise<TaskEntity> {
    const taskUpdated = await this.getTaskById(id);
    taskUpdated.status = status;
    return await this.taskRepository.save(taskUpdated);
  }
}
