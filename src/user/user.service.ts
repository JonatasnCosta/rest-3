import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { CreateUserService } from './create-user/create-user.service';
import { FindOneUserService } from './find-one-user/find-one-user.service';
import { FindAllUsrsService } from './find-all-usrs/find-all-usrs.service';
import { PartialUserService } from './partial-user/partial-user.service';
import { UpdateUserService } from './update-user/update-user.service';
import { RemoveUserService } from './remove-user/remove-user.service';
import { PartialUserDto } from './dto/partial-user.dto';

@Injectable()
export class UserService {
  
  constructor(private readonly createUser: CreateUserService,
              private readonly findOneUser: FindOneUserService,
              private readonly findAllUsers: FindAllUsrsService,
              private readonly partialUser: PartialUserService,
              private readonly updateUser: UpdateUserService,
              private readonly removeUser: RemoveUserService
  ) {} 

  async create(data: CreateUserDto) {
    return this.createUser.createUser(data)
  };

  async findOne(id: number) {
    return this.findOneUser.findeOne(id)
  };

  async findAll() {
    return this.findAllUsers.findAll()
  };

  async update(id: number, data: UpdateUserDto) {
    return this.updateUser.updateUser(id, data)
  };

  async partial(id: number, data: PartialUserDto) {
    return this.partialUser.partialuser(id, data)
  };

  async remove(id: number) {
    return this.removeUser.removeUser(id)
  };

}
