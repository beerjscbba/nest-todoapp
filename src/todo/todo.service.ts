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

  create(createTodoDto: CreateTodoDto): ReadTodoDto {
    const id = ++this.id;
    const newTodo = {
      id,
      ...createTodoDto,
    };
    this.todos.push(newTodo);
    return newTodo;
  }
  findAll(): ReadTodoDto[] {
    return this.todos;
  }

  findOne(id: number): ReadTodoDto {
    const todo = this.todos.find((todo) => todo.id === id);
    if (!todo) {
      // Here, you must customize the error or implement the necessary control
      // throw new Error(`not found object with id: ${id}`)
      console.log(`not found object with id: ${id}`);
    } else {
      return todo
    }
  }

  update(id: number, updateTodoDto: UpdateTodoDto): ReadTodoDto {
    const todo = this.findOne(id)
    Object.assign(todo, updateTodoDto);
    return { ...todo };
  }

  remove(id: number | string) {
    const index = this.todos.findIndex((todo) => todo.id === id);
    if (index === -1) {
      return null;
    }
    this.todos.splice(index, 1);
    return `Delete the todo with id: ${id}`
    // return this.todos
  }
}
