// other.module.ts

import { Module } from '@nestjs/common';
import { PrismaService } from 'other/prisma.service';

@Module({
  providers: [PrismaService],
  exports: [PrismaService],
})
export class OtherModule {}
