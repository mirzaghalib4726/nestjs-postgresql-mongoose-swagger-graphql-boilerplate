import { Inject, Injectable, Req } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Model } from "mongoose";
import { User } from "src/user/entity/user.entity";
import { DatabaseUserDto } from "src/user/user.dto";
import { Repository } from "typeorm";

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User) private readonly userRepository: Repository<User>,
    @Inject("USER_MODEL") private readonly userModel: Model<DatabaseUserDto>
  ) {}

  async createUser(@Req() Req, createUserDto: DatabaseUserDto): Promise<User> {
    const user: User = new User();
    user.full_name = createUserDto.full_name;
    user.email = createUserDto.email;
    user.phone = createUserDto.phone;
    user.dob = String(createUserDto.dob);
    user.gender = createUserDto.gender;
    user.password = createUserDto.password;
    user.security_question = createUserDto.security_question;
    user.security_answer = createUserDto.security_answer;
    user.address = createUserDto.address;
    user.last_login = String(new Date().valueOf());
    user.ip_address = "2";
    user.nickname = createUserDto.nickname;
    user.status = createUserDto.status;

    return this.userRepository.save(user);
  }

  async createUserWithRole(body): Promise<any> {}

  async findOne(id: string, filter: any): Promise<any> {}

  async findByEmail(email: string): Promise<any> {}

  // async createUser(user): Promise<any> {}

  // async getUserById(req, id: string) {}

  async updateUser(id: string, data: any): Promise<any> {}

  async deleteUser(id: string): Promise<any> {}

  async verifyEmail(data: any): Promise<any> {}

  async verifyEmailRequest(@Req() req, data) {}

  async forgotPassword(data) {}

  async verifyForgotRequest(data) {}

  async setNewPassword(@Req() req, data: any, flag = 2) {}

  async changePassword(@Req() req, data) {}

  async logout(@Req() req, id: any) {}

  async findByIdAndUpdate(id: string, data: object, options: any = {}) {}

  async updateOne(id: object, data: object) {}

  async aggregateLogin(query) {}

  // async findUsersAll(req, skip, limit, type, role, filter) {}

  async restore(@Req() req, userId) {}
}
