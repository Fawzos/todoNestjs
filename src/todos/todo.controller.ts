import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { TodoService } from './todo.service';
import { CreateTodoDto } from './dto/create-todo.dto';

@Controller('api/todos')
export class TodoController {
  constructor(private readonly todoService: TodoService) {}

  @Post()
  async addTodo(@Body() createTodoDto: CreateTodoDto) {
    return this.todoService.addTodo(createTodoDto);
  }

  @Get()
  findAll() {
    return this.todoService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.todoService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() createTodoDto: CreateTodoDto) {
    return this.todoService.update(id, createTodoDto);
  }

  @Delete(':id')
  delete(@Param('id') id: string) {
    return this.todoService.delete(id);
  }
}
