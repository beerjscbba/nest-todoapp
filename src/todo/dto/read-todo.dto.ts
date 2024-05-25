import { Todo } from '../entities/todo.entity';
export class ReadTodoDto extends Todo {}
// The entity or schema cant be used directly for security reasons, so we create a DTO to expose the data.
