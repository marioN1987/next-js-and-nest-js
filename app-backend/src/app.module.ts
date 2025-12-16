import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { StreamingModule } from './streaming_content/modules/streamingContent.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DataSource } from 'typeorm';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { UsersModule } from './users/module/users.module';

@Module({
  imports: [
    //gets .env variables
    ConfigModule.forRoot({ isGlobal: true, envFilePath: '.env' }),
    //It initializes the database connection asynchronously
    TypeOrmModule.forRootAsync({
      //ConfigService provides access to environment variables
      useFactory: (configService: ConfigService) => ({
          type: configService.get<'mysql'>('DB_CONNECTION'),
          host: configService.get<string>('DB_HOST'),
          port: Number(configService.get('DB_PORT')),
          username: configService.get<string>('DB_USERNAME'),
          password: configService.get<string>('DB_PASSWORD'),
          database: configService.get<string>('DB_DATABASE'),
          //loads all entity classes
          entities: [__dirname + '/**/*.entity{.ts,.js}'],
          synchronize: true,
          logging: true,
          logger: 'advanced-console',
      }),
      inject: [ConfigService],
    }),
    StreamingModule,
    UsersModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
  constructor(private dataSource: DataSource) {}
}