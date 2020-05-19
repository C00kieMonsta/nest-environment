import { Module } from '@nestjs/common';
import { TypeOrmModule, TypeOrmModuleOptions } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';

import { config } from './config/config';
import { UserController } from './user/user.controller';
import { UserService } from './user/user.service';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    TypeOrmModule.forRoot({
      type: 'mssql',
      host: 'localhost',
      port: 1435,
      username: 'sa',
      password: 'reallyStrongPwd123',
      database: 'back_admin',
      synchronize: true,
      requestTimeout: 3000,
      // host: process.env.DATABASE_URL,
      // port: +process.env.DATABASE_PORT,
      // username: process.env.DATABASE_USERNAME,
      // password: process.env.DATABASE_PASSWORD,
      // database: process.env.DATABASE_NAME,
      // synchronize: process.env.DATABASE_SYNCHRONIZE === 'true',
      // requestTimeout: +process.env.DATABASE_REQUEST_TIMEOUT,
      logging: true,
      entities: [`dist/**/*.entity{.ts,.js}`],
    }),
  ],
  controllers: [UserController],
  providers: [UserService],
})
export class AppModule { }
