import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { StreamingContentController } from '../controllers/streamingContent.controller';
import { StreamingContentService } from '../services/streamingContent.service';
import { StreamingContentEntity } from '../entities/streamingContent.entity';
import { APP_GUARD } from '@nestjs/core';
import { MockJwtAuthGuard } from '../../auth/mockJwtAuthGuard';

@Module({
  imports:[TypeOrmModule.forFeature([StreamingContentEntity])],
  controllers: [StreamingContentController],
  providers: [StreamingContentService, { provide: APP_GUARD, useClass: MockJwtAuthGuard}],
  exports: [TypeOrmModule]
})
export class StreamingModule {}