import { Injectable } from '@nestjs/common';
import { v4 as uuid } from 'uuid';

import { TasksModel, TaskStatus } from './tasks.model';
import { CreateTaskDto } from './dto/create-task.dto';
import { GetTaskFilterDto } from './dto/get-task-filter.dto';

@Injectable()
export class TasksService {
  private tasks: TasksModel[] = [];

  getAllTasks(): TasksModel[] {
    return this.tasks;
  }

  getTasksWithFilters(filterDto: GetTaskFilterDto): TasksModel[] {
    const { search, status } = filterDto;
    let tasks = this.getAllTasks();

    if (status) {
      tasks = tasks.filter((task: TasksModel) => task.status === status);
    }

    if (search) {
      tasks = tasks.filter((task: TasksModel) => {
        return task.title.includes(search) || task.description.includes(search);
      });
    }

    return tasks;
  }

  getTaskById(id: string): TasksModel {
    return this.tasks.find((task: TasksModel) => task.id === id);
  }

  createTask(createTaskDto: CreateTaskDto): TasksModel {
    const { title, description } = createTaskDto;

    const task: TasksModel = {
      id: uuid(),
      title,
      description,
      status: TaskStatus.OPEN,
    };
    this.tasks.push(task);
    return task;
  }

  updateTask(id: string, status: TaskStatus): TasksModel {
    const task = this.getTaskById(id);
    task.status = status;
    return task;
  }

  deleteTaskStatus(id: string): void {
    this.tasks = this.tasks.filter((task: TasksModel) => task.id !== id);
  }
}
