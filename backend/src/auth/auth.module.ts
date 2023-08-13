// auth.module.ts

import { Module } from '@nestjs/common';
import { OtherModule } from 'other/other.module';
import { PrismaService } from 'other/prisma.service';
import { AuthService } from 'auth/auth.service';
import { AuthResolver } from 'auth/auth.resolver';
import { GoogleSheetsService } from 'google/google-sheets.service';

@Module({
  imports: [OtherModule],
  providers: [PrismaService, AuthService, AuthResolver, GoogleSheetsService],
})
export class AuthModule {}
