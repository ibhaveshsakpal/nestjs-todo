import { Module } from '@nestjs/common';
import { TaskService } from './task/task.service';
import { TaskController } from './task/task.controller';
import { TaskModule } from './task/task.module';
import { MongooseModule } from '@nestjs/mongoose';
import { TaskSchema } from './schemas/task.schema';

@Module({
  imports: [
    TaskModule,
    MongooseModule.forRoot(
      'mongodb+srv://ibhaveshsakpal:bhavesh@cluster0.xdmpkvy.mongodb.net/?retryWrites=true&w=majority',
    ),
    MongooseModule.forFeature([{ name: 'Task', schema: TaskSchema }]),
  ],
  controllers: [TaskController],
  providers: [TaskService],
})
export class AppModule {}
