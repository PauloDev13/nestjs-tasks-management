import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Query,
} from '@nestjs/common';
import { TasksService } from './tasks.service';
import { TasksModel, TaskStatus } from './tasks.model';
import { CreateTaskDto } from './dto/create-task.dto';
import { GetTaskFilterDto } from './dto/get-task-filter.dto';

@Controller('tasks')
export class TasksController {
  constructor(private tasksService: TasksService) {}

  @Get()
  getAllTasks(@Query() filterDto: GetTaskFilterDto): TasksModel[] {
    if (Object.keys(filterDto).length) {
      return this.tasksService.getTasksWithFilters(filterDto);
    } else {
      return this.tasksService.getAllTasks();
    }
  }

  @Get(':id')
  getTaskById(@Param('id') id: string): TasksModel {
    return this.tasksService.getTaskById(id);
  }

  @Post()
  createTask(@Body() createTaskDto: CreateTaskDto): TasksModel {
    return this.tasksService.createTask(createTaskDto);
  }

  @Patch(':id/status')
  updateTask(@Param('id') id: string, @Body('status') status: TaskStatus) {
    return this.tasksService.updateTask(id, status);
  }

  @Delete(':id')
  deleteTaskStatus(@Param('id') id: string): void {
    this.tasksService.deleteTaskStatus(id);
  }
}
