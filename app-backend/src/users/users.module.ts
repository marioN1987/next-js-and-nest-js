import { Module } from '@nestjs/common';
import { UsersController } from './users.controller';
import { UsersService } from './users.service'
import { APP_GUARD } from '@nestjs/core';
import { MockJwtAuthGuard } from '../auth/mockJwtAuthGuard';

@Module({
  //imports:[TypeOrmModule.forFeature([StreamingContentEntity])],
  controllers: [UsersController],
  providers: [UsersService, { provide: APP_GUARD, useClass: MockJwtAuthGuard}],
  //exports: [TypeOrmModule]
})
export class UsersModule {}