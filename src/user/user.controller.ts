import { Controller } from "@nestjs/common";
import { ApiBearerAuth, ApiTags } from "@nestjs/swagger";
// import {
//   AddAminUser,
//   ChangePassword,
//   ForgotNewPasswordObj,
//   ForgotPassword,
//   OtpObject,
//   PropertyListingObj,
//   UserUpdateObj,
//   VerificationNewRequestObj,
//   VerificationObj,
// } from 'src/user/user.dto';
import { UserService } from "src/user/user.service";

@Controller("users")
@ApiTags("user")
@ApiBearerAuth()
export class UserController {
  constructor(private userService: UserService) {}

  // @Get('/all')
  // @ApiQuery({
  //   name: 'page',
  //   type: Number,
  //   description: 'The page no',
  //   required: false,
  // })
  // @ApiQuery({
  //   name: 'limit',
  //   type: Number,
  //   description: 'limit',
  //   required: false,
  // })
  // @ApiQuery({
  //   name: 'user_role',
  //   type: String,
  //   description: 'User Role',
  //   required: false,
  // })
  // @ApiQuery({
  //   name: 'user_type',
  //   type: String,
  //   description: 'User Type',
  //   required: false,
  // })
  // getAllUsers(
  //   @Req() req,
  //   @Query('page') page: number,
  //   @Query('limit') limit: number,
  //   @Query('user_type') user_type: string,
  //   @Query('user_role') user_role: string,
  // ) {
  //   return this.userService.findAllUsers(
  //     req,
  //     page,
  //     limit,
  //     user_type,
  //     user_role,
  //     {
  //       _id: 1,
  //       first_name: 1,
  //       last_name: 1,
  //       phone: 1,
  //       email: 1,
  //       profile_image: 1,
  //       dob: 1,
  //       gender: 1,
  //       status: 1,
  //       user_type: 1,
  //       user_role: 1,
  //       property_listing_setting: 1,
  //     },
  //   );
  // }

  // @Post('create')
  // createUser(@Req() req, @Body() body: AddAminUser) {
  //   return this.userService.createUserWithRole(body);
  // }

  // @Get('/:id')
  // getUserById(@Req() req, @Param('id') id: string) {
  //   return this.userService.getUserById(req, id);
  // }

  // @Patch('/:id')
  // updateUser(@Req() req, @Param('id') id: string, @Body() data: UserUpdateObj) {
  //   return this.userService.updateUser(id, data);
  // }

  // @Patch('/property-listing-setting/:id')
  // setPropertyListing(
  //   @Req() req,
  //   @Param('id') id: string,
  //   @Body() arr: PropertyListingObj,
  // ) {
  //   const data = {
  //     $set: { property_listing_setting: arr.property_listing_setting }
  //   };
  //   return this.userService.updateUser(id, data);
  // }

  // @Delete('/:id')
  // deleteUser(@Req() req, @Param('id') id: string) {
  //   return this.userService.deleteUser(id);
  // }

  // @Public()
  // @Patch('email/verify')
  // verifyEmail(@Req() req, @Body() data: OtpObject) {
  //   return this.userService.verifyEmail(data);
  // }

  // @Public()
  // @Patch('email/reverify-request')
  // verifyEmailRequest(@Req() req, @Body() data: VerificationNewRequestObj) {
  //   return this.userService.verifyEmailRequest(req, data);
  // }

  // @Put('/password/change')
  // changePassword(@Req() req, @Body() data: ChangePassword) {
  //   return this.userService.changePassword(req, data);
  // }

  // @Public()
  // @Put('/password/forgot/request')
  // forgotPassword(@Req() req, @Body() data: ForgotPassword) {
  //   return this.userService.forgotPassword(data);
  // }

  // @Public()
  // @Put('/password/forgot/verify')
  // verifyForgot(@Req() req, @Body() data: VerificationObj) {
  //   return this.userService.verifyForgotRequest(data);
  // }

  // @Public()
  // @Put('/password/forgot')
  // setForgotNewPassword(@Req() req, @Body() data: ForgotNewPasswordObj) {
  //   return this.userService.setNewPassword(req, data, 2);
  // }

  // @Public()
  // @Patch('/logout/:id')
  // logout(@Req() req, @Param('id') id: string) {
  //   return this.userService.logout(req, id);
  // }

  // @Patch('/restore/:userId')
  // restore(@Req() req, @Param('userId') id: string) {
  //   return this.userService.restore(req, id);
  // }
}
