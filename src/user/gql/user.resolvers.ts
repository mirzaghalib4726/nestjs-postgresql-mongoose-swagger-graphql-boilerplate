// import { Inject } from '@nestjs/common';
// import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
// //import { Model, Types } from 'mongoose';
// //import { RoleService } from 'src/role/role.service';
// import {
//   UserCreateObj,
//   UserGraphqlCreateObj,
//   UserGraphqlObj,
//   UserGraphqlSingleObj,
//   UserInputObj,
// } from 'src/user/user.dto';

// @Resolver()
// export class UserResolver {
//   constructor() {} //private readonly roleService: RoleService, //@Inject('USER_MODEL') private readonly userModel: Model<UserCreateObj>,

//   @Query((returns) => UserGraphqlObj)
//   async getAllUsers(
//     @Args({ name: 'page', nullable: true }) page: number,
//     @Args({ name: 'limit', nullable: true, defaultValue: 25 }) limit: number,
//     @Args({ name: 'user_type', nullable: true, defaultValue: null })
//     type: string,
//     @Args({ name: 'user_role', nullable: true, defaultValue: null })
//     role: string,
//     @Args({ name: 'status', nullable: true, defaultValue: null })
//     status: string,
//   ) {
//     let query = {};
//     if (!!status) {
//       query = {
//         status: status,
//       };
//     } else {
//       query = {
//         status: {
//           $ne: 'Archived',
//         },
//       };
//     }

//     if (!!type) {
//       query['user_type'] = type;
//     }

//     if (!!role) {
//       //query['user_role'] = new Types.ObjectId(role);
//     }

//     // const users = await this.userModel.aggregate([
//     //   { $match: query },
//     //   { $skip: (page && (page - 1) * limit) || 0 },
//     //   { $limit: limit || 25 },
//     //   {
//     //     $lookup: {
//     //       from: 'roles',
//     //       localField: 'user_role',
//     //       foreignField: '_id',
//     //       as: 'user_role',
//     //     },
//     //   },
//     //   {
//     //     $unwind: {
//     //       path: '$user_role',
//     //       preserveNullAndEmptyArrays: false,
//     //     },
//     //   },
//     //   {
//     //     $project: {
//     //       _id: 1,
//     //       first_name: 1,
//     //       last_name: 1,
//     //       phone: 1,
//     //       email: 1,
//     //       profile_image: 1,
//     //       dob: 1,
//     //       gender: 1,
//     //       status: 1,
//     //       user_type: 1,
//     //       user_role: 1,
//     //       property_listing_setting: 1,
//     //     },
//     //   },
//     // ]);

//     return {
//       status: 200,
//       //size: await this.userModel.countDocuments(query),
//       //data: users,
//     };
//   }

//   @Query((returns) => UserGraphqlSingleObj)
//   async getUserById(@Args('_id') id: string) {
//     // const user = await this.userModel.aggregate([
//     //   { $match: { _id: new Types.ObjectId(id) } },
//     //   {
//     //     $lookup: {
//     //       from: 'roles',
//     //       localField: 'user_role',
//     //       foreignField: '_id',
//     //       as: 'user_role',
//     //     },
//     //   },
//     //   {
//     //     $unwind: {
//     //       path: '$user_role',
//     //       preserveNullAndEmptyArrays: false,
//     //     },
//     //   },
//     //   {
//     //     $addFields: {
//     //       permissions: '$user_role.permissions',
//     //     },
//     //   },
//     //   {
//     //     $unwind: {
//     //       path: '$permissions',
//     //       preserveNullAndEmptyArrays: false,
//     //     },
//     //   },
//     //   {
//     //     $lookup: {
//     //       from: 'permissions',
//     //       let: {
//     //         pId: '$permissions.permission',
//     //         enable: '$permissions.enable',
//     //       },
//     //       pipeline: [
//     //         {
//     //           $match: {
//     //             $expr: {
//     //               $and: [
//     //                 {
//     //                   $eq: ['$_id', '$$pId'],
//     //                 },
//     //               ],
//     //             },
//     //           },
//     //         },
//     //         {
//     //           $project: {
//     //             _id: 0,
//     //             enable: '$$enable',
//     //             permission: '$$pId',
//     //             name: 1,
//     //           },
//     //         },
//     //       ],
//     //       as: 'permissions',
//     //     },
//     //   },
//     //   {
//     //     $unwind: {
//     //       path: '$permissions',
//     //       preserveNullAndEmptyArrays: false,
//     //     },
//     //   },
//     //   {
//     //     $group: {
//     //       _id: '$_id',
//     //       first_name: { $first: '$first_name' },
//     //       last_name: { $first: '$last_name' },
//     //       gender: { $first: '$gender' },
//     //       email: { $first: '$email' },
//     //       phone: { $first: '$phone' },
//     //       user_type: { $first: '$user_type' },
//     //       status: { $first: '$status' },
//     //       property_listing_setting: {
//     //         $first: '$property_listing_setting',
//     //       },
//     //       profile_image: { $first: '$profile_image' },
//     //       user_role: { $first: '$user_role' },
//     //       permissions: { $push: '$permissions' },
//     //     },
//     //   },
//     //   {
//     //     $addFields: {
//     //       'user_role.permissions': '$permissions',
//     //     },
//     //   },
//     //   {
//     //     $project: {
//     //       permissions: 0,
//     //     },
//     //   },
//     // ]);

//     return { status: 200, data: '' };
//   }

//   @Mutation((returns) => UserGraphqlCreateObj)
//   async createUser(
//     @Args('userData', { nullable: true }) userData: UserInputObj,
//   ) {
//     //const data: any = await this.userModel.create(userData);
//     return {
//       status: 201,
//       data: 'data._doc ?? data',
//     };
//   }
// }
