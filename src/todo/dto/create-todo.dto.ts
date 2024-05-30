import { OmitType } from '@nestjs/mapped-types';
import { Todo } from '../entities/todo.entity';
import { IsBoolean, IsNotEmpty, Length, MinLength } from 'class-validator';
export class CreateTodoDto extends OmitType(Todo, ['id']) {
  @IsNotEmpty()
  @MinLength(5, { message: 'Title is too short 5 custom' })
  title: string;

  @IsNotEmpty()
  @Length(10, 30)
  description: string;

  @IsNotEmpty()
  @IsBoolean()
  done: boolean;
}
