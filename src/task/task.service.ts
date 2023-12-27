import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { ITask } from './task.interface';

@Injectable()
export class TaskService {
  constructor(@InjectModel('Task') private taskModel: Model<ITask>) {}

  async getTask(): Promise<ITask[]> {
    try {
      const task = await this.taskModel.find();
      return task;
    } catch (error) {
      console.error(error);
    }
  }

  async getTaskById(id: any): Promise<ITask> {
    try {
      const task = await this.taskModel.findById(id);
      return task;
    } catch (error) {
      console.error(error);
    }
  }

  async createTask(body: any): Promise<ITask> {
    try {
      const newTask = new this.taskModel(body);
      return newTask.save();
    } catch (error) {
      console.error(error);
    }
  }

  async deleteTask(id: string): Promise<ITask> {
    try {
      const deletedTask = await this.taskModel
        .findByIdAndDelete(id)
        .lean()
        .exec();
      return deletedTask;
    } catch (error) {
      console.error(error);
    }
  }

  async updateTask(id: string, body: any): Promise<ITask> {
    try {
      const updatedTask = await this.taskModel.findByIdAndUpdate(id, body, {
        new: true,
      });
      return updatedTask;
    } catch (error) {
      console.error(error);
    }
  }
}
