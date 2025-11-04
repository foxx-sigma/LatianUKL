import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { PrismaService } from '../prisma.service'; // ✅ tambahkan ini

@Module({
  controllers: [UsersController],
  providers: [UsersService, PrismaService], // ✅ tambahkan PrismaService di sini
})
export class UsersModule {}
