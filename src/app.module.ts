/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-require-imports */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { MiddlewareConsumer, Module, ValidationPipe } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { APP_PIPE } from '@nestjs/core';
import { TypeOrmModule, TypeOrmModuleOptions } from '@nestjs/typeorm';
import { ReportsModule } from './module/reports/reports.module';
import { UsersModule } from './module/users/users.module';
const cookieSession = require('cookie-session');

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: `.env.${process.env.NODE_ENV}.local`,
      isGlobal: true,
    }),
    TypeOrmModule.forRootAsync({
      inject: [ConfigService],
      useFactory: (config: ConfigService): TypeOrmModuleOptions => {
        const type = config.get<string>('DB_TYPE') as 'sqlite' | 'postgres';

        if (type === 'sqlite') {
          return {
            type,
            database: config.get<string>('DB_NAME'),
            entities: [__dirname + '/entity/*.entity.{ts,js}'],
            synchronize: true,
          };
        }

        return {
          type,
          host: config.get<string>('DB_HOST'),
          port: config.get<number>('DB_PORT'),
          password: config.get<string>('DB_PASSWORD'),
          username: config.get<string>('DB_USERNAME'),
          database: config.get<string>('DB_NAME'),
          entities: [__dirname + '/entity/*.entity.{ts,js}'],
          synchronize: true,
          logging: true,
        };
      },
    }),
    UsersModule,
    ReportsModule,
  ],
  controllers: [],
  providers: [
    {
      provide: APP_PIPE,
      useValue: new ValidationPipe({
        whitelist: true,
      }),
    },
  ],
})
export class AppModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(
        cookieSession({
          keys: ['bsdbsdhs'],
        }),
      )
      .forRoutes('*');
  }
}
