import { Injectable } from '@nestjs/common';
import { UserDto } from './user.dto';

@Injectable()
export class UsersService {

  userAccess(data: Partial<UserDto>): string {
    if (data.email === "admin@test.com" && data.password === "admin12") {
      return "admin";
    } else {
      return "guest";
    }
  }
}
