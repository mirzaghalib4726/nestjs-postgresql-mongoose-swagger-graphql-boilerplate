import * as mongoose from "mongoose";
export const databaseProviders = [
  {
    provide: "DATABASE_CONNECTION",
    useFactory: async (): Promise<typeof mongoose> =>
      await mongoose.connect(process.env.MONGO_SERVER_DEVELOPMENT, {
        autoIndex: true,
        autoCreate: true,
      }),
  },
];
