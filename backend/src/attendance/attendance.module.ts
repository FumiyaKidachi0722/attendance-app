// attendance.module.ts

import { Module } from '@nestjs/common';
import { OtherModule } from 'other/other.module';
import { PrismaService } from 'other/prisma.service';
import { GoogleSheetsService } from 'google/google-sheets.service';
import { AttendanceResolver } from 'attendance/attendance.resolver';
import { AttendanceService } from 'attendance/attendance.service';
import { SlackService } from 'slack/slack.service';
import { DateService } from 'date/date.service';

@Module({
  imports: [OtherModule],
  providers: [
    PrismaService,
    GoogleSheetsService,
    AttendanceResolver,
    AttendanceService,
    SlackService,
    DateService,
  ],
})
export class AttendanceModule {}
