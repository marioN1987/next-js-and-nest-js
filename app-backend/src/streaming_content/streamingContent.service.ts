import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { StreamingContentEntity } from './streamingContent.entity';
import { UUID } from 'crypto';
import { StreamingContentDto } from './streamingContent.dto';

@Injectable()
export class StreamingContentService {
  constructor(
    @InjectRepository(StreamingContentEntity)
    private streamingContentRepository: Repository<StreamingContentEntity>,
  ) {}

  findAll(): Promise<StreamingContentEntity[]> {
    return this.streamingContentRepository.find();
  }

  findOne(id: UUID): Promise<StreamingContentEntity | null> {
    return this.streamingContentRepository.findOneBy({ id });
  }

  async remove(id: UUID): Promise<void> {
    await this.streamingContentRepository.delete(id);
  }

  async update(id: UUID, data: StreamingContentDto) {
    const existing = await this.streamingContentRepository.findOne({ where: { id } });

    if (!existing) return null;

    // merge data into existing entity
    const updated = this.streamingContentRepository.merge(existing, data);

    return await this.streamingContentRepository.save(updated);
  }

  create(data: Partial<StreamingContentDto>) {
    const entity = this.streamingContentRepository.create(data);
    return this.streamingContentRepository.save(entity);
  }
}