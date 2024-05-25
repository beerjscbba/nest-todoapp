import { Injectable } from '@nestjs/common';
import { CreateTodoDto } from './dto/create-todo.dto';
import { UpdateTodoDto } from './dto/update-todo.dto';
import { Todo } from '../schemas/todo.schema';
import { ReadTodoDto } from './dto/read-todo.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class TodoService {
  constructor(
    @InjectModel(Todo.name) private readonly todoModel: Model<Todo>,
  ) {}

  async create(createTodoDto: CreateTodoDto): Promise<ReadTodoDto> {
    const createdTodo = new this.todoModel(createTodoDto);
    return createdTodo.save();
  }
  async findAll(): Promise<ReadTodoDto[]> {
    return this.todoModel.find();
  }

  async findOne(id: string): Promise<ReadTodoDto> {
    return this.todoModel.findById(id);
  }
  async update(id: string, updateTodoDto: UpdateTodoDto): Promise<ReadTodoDto> {
    //new true is used to return the updated document

    return this.todoModel.findByIdAndUpdate(id, updateTodoDto, {
      new: true,
    });
  }

  async remove(id: string) {
    return this.todoModel.findByIdAndDelete(id);
  }

  async removeAll() {
    return this.todoModel.deleteMany();
  }
}
