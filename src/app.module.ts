import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TodoModule } from './todos/todo.module';
import { UserModule } from './users/user.module';
import { MongooseModule } from '@nestjs/mongoose';
import { TodoSchema } from './todos/shcemas/todo.schema';
import { AuthModule } from './auth/auth.module';
import { UserSchema } from './users/shcema/user.shcema';
@Module({
  imports: [
    MongooseModule.forRoot(
      'mongodb+srv://fawzos:Abc123456@cluster0.nu3napy.mongodb.net/?retryWrites=true&w=majority',
    ),
    MongooseModule.forFeature([{ name: 'Todo', schema: TodoSchema }]),
    TodoModule,
    UserModule,
    AuthModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
