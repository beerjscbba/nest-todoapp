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
  //partial type is used to make all properties optional
  // other way to make properties optional is to use @IsOptional() decorator
  // And and other form with typescript is to use ? after property name
  @IsNotEmpty()
  @MinLength(5)
  title: string;

  @IsNotEmpty()
  @Length(10, 100)
  description: string;

  @IsNotEmpty()
  @IsBoolean()
  done: boolean;
}
