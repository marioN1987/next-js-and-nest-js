import { Body, Controller, Get, Param, Post, Put, Delete, UseGuards } from '@nestjs/common';
import { StreamingContentService } from './streamingContent.service';
import { StreamingContentDto } from './streamingContent.dto';
import { StreamingContentEntity } from './streamingContent.entity';
import type { UUID } from 'crypto';

@Controller('api/streaming')
export class StreamingContentController {
  constructor(private readonly streamingContentService: StreamingContentService) {}

  @Get()
  getAll(): Promise<StreamingContentEntity[]> {
    return this.streamingContentService.findAll();
  }

  @Get(':id')
  async findOne(@Param() params: any): Promise<StreamingContentEntity | null> {
    return this.streamingContentService.findOne(params.id);
  }

  @Post('create')
  async create(@Body() data: StreamingContentDto) {
    const exists = await this.streamingContentService.findOne(data.id);

    if (exists) {
      return "The provided id already exists";
    }

    const streamingCreated = await this.streamingContentService.create(data);

    if (!streamingCreated) {
      return { message: 'Streaming creation failed' };
    }

    return 'New streaming content created successfully';
  }

  @Put(':id')
  async update(@Param('id') id: UUID, @Body() updatedData: StreamingContentDto) {
    const updated = await this.streamingContentService.update(id, updatedData);

    console.log(updated);

    if (!updated) {
      return { message: `No content found with id ${id}` };
    }

    return {
      message: 'Streaming content updated successfully',
      content: updated,
    };
  }

  @Delete(':id')
  remove(@Param('id') id: UUID) {
    return this.streamingContentService.remove(id);
  }
}