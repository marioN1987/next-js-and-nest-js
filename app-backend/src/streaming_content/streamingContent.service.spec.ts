import { Injectable } from '@nestjs/common';
import { IStreaming } from '../interfaces/streaming.interface';

@Injectable()
export class StreamingService {
  private readonly streaming: IStreaming[] = [];

  create(cat: IStreaming) {
    this.streaming.push(cat);
  }

  findAll(): IStreaming[] {
    return this.streaming;
  }
}