import { Injectable } from '@nestjs/common';
import { CreateTodoDto } from './dto/create-todo.dto';
import { UpdateTodoDto } from './dto/update-todo.dto';
import { Todo } from './entities/todo.entity';
import { ReadTodoDto } from './dto/read-todo.dto';

@Injectable()
export class TodoService {
  private id = 2;
  private todos: Todo[] = [
    {
      id: 1,
      title: 'Todo 1',
      description: 'Description 1',
      done: false,
    },
    {
      id: 2,
      title: 'Todo 2',
      description: 'Description 2',
      done: true,
    },
  ];

  create(createTodoDto: CreateTodoDto): Promise<ReadTodoDto> {
    const id = ++this.id;
    const newTodo = {
      id,
      ...createTodoDto,
    };
    this.todos.push(newTodo);
    return new Promise((resolve, reject) => {
      resolve({ ...newTodo });
      reject(new Error('Error'));
    });
  }
  findAll(): Promise<ReadTodoDto[]> {
    return Promise.resolve(this.todos);
  }

  findOne(id: number): ReadTodoDto {
    return this.todos.find((todo) => todo.id === id);
  }

  update(id: number, updateTodoDto: UpdateTodoDto): ReadTodoDto {
    const todo = this.todos.find((todo) => todo.id === id);
    if (!todo) {
      return null;
    }
    Object.assign(todo, updateTodoDto);
    return { ...todo };
  }

  remove(id: number) {
    const index = this.todos.findIndex((todo) => todo.id === id);
    if (index === -1) {
      return null;
    }
    this.todos.splice(index, 1);
    return this.todos;
  }
}
