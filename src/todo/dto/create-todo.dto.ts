import { IsBoolean, IsNotEmpty, Length, MinLength } from 'class-validator';
import { OmitType } from '@nestjs/mapped-types';
import { Todo } from '../entities/todo.entity';
export class CreateTodoDto extends OmitType(Todo, ['id']) {
  @IsNotEmpty()
  @MinLength(5)
  title: string;

  @IsNotEmpty()
  @Length(10, 12)
  description: string;

  @IsNotEmpty()
  @IsBoolean()
  done: boolean;
}
