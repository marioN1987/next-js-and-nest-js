import { Body, Controller, Get, Param, Post, Put, Delete, UseGuards } from '@nestjs/common';
import { StreamingContentService } from '../services/streamingContent.service';
import { StreamingContentDto } from '../dto/streamingContent.dto';
import { StreamingContentEntity } from '../entities/streamingContent.entity';
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
      return { success: false, message: 'The provided id already exists' };
    }

    const streamingCreated = await this.streamingContentService.create(data);

    if (!streamingCreated) {
      return { success: false, message: 'Streaming creation failed' };
    }

    return { success: true, message: 'Streaming created successfully' };
  }

  @Put(':id')
  async update(@Param('id') id: UUID, @Body() updatedData: StreamingContentDto) {
    const updated = await this.streamingContentService.update(id, updatedData);

    if (!updated) {
      return { success: false, message: `No content found with id ${id}` };
    }

    return {
      success: true,
      message: 'Streaming content updated successfully',
      content: updated,
    };
  }

  @Delete(':id')
  async remove(@Param('id') id: UUID) {
    const deleted = await this.streamingContentService.remove(id);

    if (!deleted) {
       return { success: true, message: 'Streaming deleted successfully' };
    }

    return { success: true, message: 'Streaming deleted successfully' };
  }
}