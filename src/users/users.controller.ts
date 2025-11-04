import { Controller, Post, Body, Get } from '@nestjs/common';
import { UsersService } from './users.service';

@Controller('api/users') // 🔥 wajib ada ini
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  // eslint-disable-next-line @typescript-eslint/require-await
  async create(
    @Body()
    body: {
      name: string;
      email: string;
      password: string;
      role?: string;
    },
  ) {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-return, @typescript-eslint/no-unsafe-call
    return this.usersService.create(body);
  }

  @Get()
  // eslint-disable-next-line @typescript-eslint/require-await
  async findAll() {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-return, @typescript-eslint/no-unsafe-call
    return this.usersService.findAll();
  }
}
