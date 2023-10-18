import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';

import { Env } from './env.interface';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: `.env.${process.env.NODE_ENV}`,
      isGlobal: true,
    }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (configService: ConfigService<Env>) => ({
        entities: [],
        host: configService.get('DB_HOST'),
        password: configService.get('DB_PASSWORD'),
        port: +configService.get('DB_PORT'),
        synchronize: process.env.NODE_ENV === 'development',
        type: 'postgres',
        username: configService.get('DB_USER'),
      }),
    }),
  ],
})
export class AppModule {}
