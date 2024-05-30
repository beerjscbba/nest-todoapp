import { PartialType } from '@nestjs/mapped-types';
import { CreateTodoDto } from './create-todo.dto';
import { IsBoolean, IsNotEmpty, IsUUID, Length, MinLength } from 'class-validator';

export class UpdateTodoDto extends PartialType(CreateTodoDto) {
  //partial type is used to make all properties optional
  // other way to make properties optional is to use @IsOptional() decorator
  // And and other form with typescript is to use ? after property name
  
  // You can verify that the ID is unique
  // @IsUUID or the same decorator
  // id: number;

  @IsNotEmpty()
  @MinLength(5)
  title: string;

  @IsNotEmpty()
  @Length(10, 20)
  description: string;

  @IsNotEmpty()
  @IsBoolean()
  done: boolean;
}
