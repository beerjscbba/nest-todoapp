import {
  IsBoolean,
  IsNotEmpty,
  IsOptional,
  Length,
  MinLength,
} from 'class-validator';
import { PartialType } from '@nestjs/mapped-types';
import { CreateTodoDto } from './create-todo.dto';

export class UpdateTodoDto extends PartialType(CreateTodoDto) {
  @IsNotEmpty()
  @MinLength(5)
  @IsOptional()
  title: string;

  @IsNotEmpty()
  @Length(10, 12)
  @IsOptional()
  description: string;

  @IsNotEmpty()
  @IsBoolean()
  @IsOptional()
  done: boolean;
}
