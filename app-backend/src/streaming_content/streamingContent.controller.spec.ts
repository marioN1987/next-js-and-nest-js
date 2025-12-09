import { Controller, Get } from '@nestjs/common';
import { StreamingService } from './streamingContent.service';

@Controller('streaming')
export class AppController {
  constructor(private readonly streamingService: StreamingService) {}

  @Get()
  getHello(): string {
    return "sdf";//this.streamingService.getHello();
  }
}