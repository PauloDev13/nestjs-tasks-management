import { Injectable, NotFoundException } from '@nestjs/common';

import { TaskStatus } from './task-status.enum';
import { CreateTaskDto } from './dto/create-task.dto';
import { GetTaskFilterDto } from './dto/get-task-filter.dto';

@Injectable()
export class TasksService {
  // private tasks: TaskStatusEnum[] = [];
  // getAllTasks(): TaskStatusEnum[] {
  //   return this.tasks;
  // }
  //
  // getTasksWithFilters(filterDto: GetTaskFilterDto): TaskStatusEnum[] {
  //   const { search, status } = filterDto;
  //   let tasks = this.getAllTasks();
  //
  //   if (status) {
  //     tasks = tasks.filter((task: TaskStatusEnum) => task.status === status);
  //   }
  //
  //   if (search) {
  //     tasks = tasks.filter((task: TaskStatusEnum) => {
  //       return task.title.includes(search) || task.description.includes(search);
  //     });
  //   }
  //
  //   return tasks;
  // }
  //
  // getTaskById(id: string): TaskStatusEnum {
  //   const task = this.tasks.find((task: TaskStatusEnum) => task.id === id);
  //
  //   if (!task) {
  //     throw new NotFoundException(
  //       null,
  //       `Tarefa não encontrada para o ID: ${id}`,
  //     );
  //   }
  //   return task;
  // }
  //
  // createTask(createTaskDto: CreateTaskDto): TaskStatusEnum {
  //   const { title, description } = createTaskDto;
  //
  //   const task: TaskStatusEnum = {
  //     id: uuid(),
  //     title,
  //     description,
  //     status: TaskStatus.OPEN,
  //   };
  //   this.tasks.push(task);
  //   return task;
  // }
  //
  // updateTaskStatus(id: string, status: TaskStatus): TaskStatusEnum {
  //   const task = this.getTaskById(id);
  //   task.status = status;
  //   return task;
  // }
  //
  // deleteTaskStatus(id: string): void {
  //   const taskFound = this.getTaskById(id);
  //   this.tasks = this.tasks.filter(
  //     (task: TaskStatusEnum) => task.id !== taskFound.id,
  //   );
  // }
}
