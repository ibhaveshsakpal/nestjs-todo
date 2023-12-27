import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema()
export class Task {
  @Prop()
  creator: string;

  @Prop({ unique: true })
  task: string;

  @Prop({
    enum: {
      values: ['complete', 'incomplete'],
      message: 'Values can be either complete or incomplete',
    },
  })
  status: string;
}

export const TaskSchema = SchemaFactory.createForClass(Task);
