import { IsBoolean, IsNotEmpty, Length, MinLength } from 'class-validator';
import { PartialType } from '@nestjs/mapped-types';
import { CreateTodoDto } from './create-todo.dto';

export class UpdateTodoDto extends PartialType(CreateTodoDto) {
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
