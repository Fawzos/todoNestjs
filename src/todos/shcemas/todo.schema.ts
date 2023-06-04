import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type TodoDocument = HydratedDocument<Todo>;

@Schema()
export class Todo {
  @Prop()
  name: string;
  @Prop()
  discription: string;
  @Prop()
  time: string;
  @Prop()
  finshed: 'yes' | 'no';
}

export const TodoSchema = SchemaFactory.createForClass(Todo);
