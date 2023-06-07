import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { InjectModel } from '@nestjs/mongoose';
import { User } from './shcema/user.shcema';
import { Model } from 'mongoose';

@Injectable()
export class UserService {
  constructor(
    @InjectModel(User.name) private readonly UserModel: Model<User>,
  ) {}
  async addUser(createUserDto: CreateUserDto): Promise<User> {
    const newUser = new this.UserModel(createUserDto);
    return newUser.save();
  }

  async findAll(): Promise<User[]> {
    return this.UserModel.find().exec();
  }

  async findOne(username: string): Promise<User> {
    const User = this.UserModel.findOne({ username });
    return User;
  }

  async update(id: string, createUserDto: CreateUserDto) {
    const updatedUSer = this.UserModel.findByIdAndUpdate(id, createUserDto, {
      new: true,
    });
    return updatedUSer;
  }

  async remove(id: string): Promise<any> {
    const removedUser = this.UserModel.findByIdAndDelete(id);
    return removedUser;
  }
}
