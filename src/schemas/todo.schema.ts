import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';
import { Todo as TodoEntity } from '../todo/entities/todo.entity';

export type TodoDocument = HydratedDocument<Todo>;

@Schema()
export class Todo extends TodoEntity {
  // @Prop() is a decorator that defines a property in a class as a field in the MongoDB collection.
  // The @Prop() decorator takes an optional argument that defines the property type.
  // The @Prop() decorator can be used with the following types:
  // int the @Prop() decorator you can use validation or other options like required, default, trim etc.

  @Prop()
  id: string;

  @Prop({ require: true, trim: true })
  title: string;

  @Prop()
  description: string;

  @Prop()
  done: boolean;
}

export const TodoSchema = SchemaFactory.createForClass(Todo);
