import { Injectable, Inject } from '@nestjs/common';

import * as dotenv from 'dotenv';
import * as fs from 'fs';
import * as path from 'path';

import { EnvConfig, ConfigOptions } from './interfaces';
import { CONFIG_OPTIONS } from '../constants';
import { TypeOrmModuleOptions } from '@nestjs/typeorm';

@Injectable()
export class ConfigService {
  private readonly envConfig: EnvConfig;

  constructor(@Inject(CONFIG_OPTIONS) private options: ConfigOptions) {
    const filePath = `${process.env.NODE_ENV || 'dev'}.env`;
    const envFile = path.resolve(__dirname, '../../', options.folder, filePath);
    this.envConfig = dotenv.parse(fs.readFileSync(envFile));
  }

  public get(key: string): string {
    return this.envConfig[key];
  }

  public getTypeOrmConfig(): TypeOrmModuleOptions {
    const env: TypeOrmModuleOptions = {
      type: 'mssql',
      host: this.get('DATABASE_URL'),
      port: parseInt(this.get('DATABASE_PORT'), 10),
      username: this.get('DATABASE_USERNAME'),
      password: this.get('DATABASE_PASSWORD'),
      database: this.get('DATABASE_NAME'),
      synchronize: true,
      logging: true,
      entities: [`dist/**/*.entity{.ts,.js}`],
    };
    return env;
  }
}
