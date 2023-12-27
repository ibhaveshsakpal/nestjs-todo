import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { TaskService } from './task.service';

@Controller('task')
export class TaskController {
  constructor(private taskService: TaskService) {}

  @Get('')
  getTask() {
    return this.taskService.getTask();
  }

  @Get(':id')
  getTaskById(@Param('id') id: string) {
    return this.taskService.getTaskById(id);
  }

  @Post('create')
  createTask(@Body() body: any) {
    return this.taskService.createTask(body);
  }

  @Delete(':id')
  deleteTask(@Param('id') id: string) {
    return this.taskService.deleteTask(id);
  }

  @Put(':id')
  updateTask(@Param('id') id: string, @Body() body: any) {
    return this.taskService.updateTask(id, body);
  }
}
