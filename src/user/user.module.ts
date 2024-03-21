import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { User } from "src/user/entity/user.entity";
//import { UserResolver } from 'src/user/gql/user.resolvers';
import { userProviders } from "src/user/providers/user.providers";
import { UserController } from "src/user/user.controller";
import { UserService } from "src/user/user.service";

@Module({
  imports: [TypeOrmModule.forFeature([User])],
  controllers: [UserController],
  providers: [UserService, ...userProviders],
  exports: [UserService],
})
export class UserModule {}
