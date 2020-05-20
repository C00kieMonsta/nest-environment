import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { UserController } from './user/user.controller';
import { UserService } from './user/user.service';
import { ConfigService } from './config/config.service';
import { ConfigModule } from './config/config.module';

const configService = new ConfigService({ folder: '' });

@Module({
  imports: [
    ConfigModule.register({ folder: '' }),
    TypeOrmModule.forRoot(configService.getTypeOrmConfig()),
  ],
  controllers: [UserController],
  providers: [UserService],
})
export class AppModule { }
