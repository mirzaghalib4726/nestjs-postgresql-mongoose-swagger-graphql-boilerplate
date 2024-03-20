import { Module } from "@nestjs/common";
//import { UserResolver } from 'src/user/gql/user.resolvers';
import { userProviders } from "src/user/providers/user.providers";
import { UserController } from "src/user/user.controller";
import { UserService } from "src/user/user.service";

@Module({
  imports: [],
  controllers: [UserController],
  providers: [UserService, ...userProviders],
  exports: [UserService],
})
export class UserModule {}
