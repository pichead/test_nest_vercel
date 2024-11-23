import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { DatabaseService } from 'src/database/database';

@Module({
  controllers: [AuthController],
  providers: [DatabaseService, AuthService],
})
export class AuthModule { }
