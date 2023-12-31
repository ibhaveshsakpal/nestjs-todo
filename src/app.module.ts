import { Module } from '@nestjs/common';
import { TaskService } from './task/task.service';
import { TaskController } from './task/task.controller';
import { TaskModule } from './task/task.module';
import { MongooseModule } from '@nestjs/mongoose';
import { TaskSchema } from './schemas/task.schema';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    TaskModule,
    ConfigModule.forRoot(),
    MongooseModule.forRoot(
      process?.env?.MONGO_URL,
    ),
    MongooseModule.forFeature([{ name: 'Task', schema: TaskSchema }]),
  ],
  controllers: [TaskController],
  providers: [TaskService],
})
export class AppModule {}
