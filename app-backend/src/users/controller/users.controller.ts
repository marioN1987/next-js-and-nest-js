import { Body, Controller, Post } from '@nestjs/common';
import { UsersService } from '../service/users.service';
import { UserDto } from '../dto/user.dto';

@Controller('api/users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post('validate')
  checkUserAccess(@Body() data: UserDto): Object {
    const access = this.usersService.userAccess(data);

    return { userAccess: access};
  }
}