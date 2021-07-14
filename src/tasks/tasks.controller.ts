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
import { CreateTaskDto } from './dto/create-task.dto';
import { GetTaskFilterDto } from './dto/get-task-filter.dto';
import { UpdateTaskStatusDto } from './dto/update-task-status.dto';

@Controller('tasks')
export class TasksController {
  constructor(private tasksService: TasksService) {}

  // @Get()
  // getAllTasks(@Query() filterDto: GetTaskFilterDto): TaskStatusEnum[] {
  //   if (Object.keys(filterDto).length) {
  //     return this.tasksService.getTasksWithFilters(filterDto);
  //   } else {
  //     return this.tasksService.getAllTasks();
  //   }
  // }
  //
  // @Get(':id')
  // getTaskById(@Param('id') id: string): TaskStatusEnum {
  //   return this.tasksService.getTaskById(id);
  // }
  //
  // @Post()
  // createTask(@Body() createTaskDto: CreateTaskDto): TaskStatusEnum {
  //   return this.tasksService.createTask(createTaskDto);
  // }
  //
  // @Patch(':id/status')
  // updateTask(
  //   @Param('id') id: string,
  //   @Body() updateTaskStatusDto: UpdateTaskStatusDto,
  // ) {
  //   const { status } = updateTaskStatusDto;
  //   return this.tasksService.updateTaskStatus(id, status);
  // }
  //
  // @Delete(':id')
  // deleteTaskStatus(@Param('id') id: string): void {
  //   this.tasksService.deleteTaskStatus(id);
  // }
}
