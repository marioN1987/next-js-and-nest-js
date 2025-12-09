import { Injectable, CanActivate, ExecutionContext } from '@nestjs/common';

@Injectable()
export class MockJwtAuthGuard implements CanActivate {
  canActivate(context: ExecutionContext): boolean {
    const request = context.switchToHttp().getRequest();

    // Attach a mock user to the request
    request.user = {
      id: 1,
      username: 'mockUser',
      roles: ['user'],
    };

    // Always allow access
    return true;
  }
}