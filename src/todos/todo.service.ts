import { Injectable } from '@nestjs/common';
import { CreateTodoDto } from './dto/create-todo.dto';
import { Todo } from 'src/todos/shcemas/todo.schema';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class TodoService {
  constructor(
    @InjectModel(Todo.name) private readonly todoModel: Model<Todo>,
  ) {}
  async addTodo(createTodoDto: CreateTodoDto): Promise<Todo> {
    const newTodo = new this.todoModel(createTodoDto);
    return newTodo.save();
  }
  async findAll(): Promise<Todo[]> {
    return this.todoModel.find().exec();
  }
  async findOne(id: string): Promise<Todo> {
    const todo = this.todoModel.findById(id).exec();
    return todo;
  }
  async update(id: string, createTodoDto: CreateTodoDto): Promise<Todo> {
    const updatedTodo = this.todoModel.findByIdAndUpdate(id, createTodoDto, {
      new: true,
    });
    return updatedTodo;
  }
  async delete(id: string): Promise<any> {
    const deletedTodo = this.todoModel.findByIdAndDelete(id);
    return deletedTodo;
  }
}
