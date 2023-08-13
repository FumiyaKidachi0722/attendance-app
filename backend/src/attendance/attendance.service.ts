// attendance/attendance.service.ts
import { Injectable } from '@nestjs/common';
import { GoogleSheetsService } from 'google/google-sheets.service';
import { SlackService } from 'slack/slack.service';
import { DateService } from 'date/date.service';
import { IAttendanceData } from 'interfaces/attendance-data.interface';

@Injectable()
export class AttendanceService {
  constructor(
    private readonly googleSheetsService: GoogleSheetsService,
    private readonly slackService: SlackService,
    private readonly dateService: DateService,
  ) {}

  private async processTime(
    attendanceData: IAttendanceData,
    messageType: 'start' | 'end',
  ) {
    const { userName, time } = attendanceData;
    const japanTime = this.dateService.toJapanTime(time);
    const day = japanTime.getDate();
    const month = japanTime.getMonth() + 1;
    const sheetName = `${month}月`;
    const timeOfDay = this.dateService.formatJapanTime(japanTime);
    const formattedDate = `${day}日`;

    // Google Sheetsから該当月のデータを取得
    const response = await this.googleSheetsService.getSheetData(sheetName);
    const headerRow = response.data.values[3];
    const dateColumnIndex = headerRow.findIndex((cell) => cell === '日付');

    if (dateColumnIndex === -1) {
      console.error('Date column not found in sheet');
      return {
        message: `Error: Date column not found in sheet (${messageType})`,
      };
    }

    const dateRow = response.data.values.find((row) => {
      return row[dateColumnIndex]?.trim() === formattedDate;
    });

    if (!dateRow) {
      console.error('Date not found in sheet');
      return { message: `Error: Date not found in sheet (${messageType})` };
    }

    const timeColumnName =
      messageType === 'start' ? '開始\n時間' : '終了\n時間';
    const timeColumnIndex = headerRow.findIndex(
      (cell) => cell === timeColumnName,
    );

    if (timeColumnIndex === -1) {
      console.error(
        `${
          messageType === 'start' ? 'Start' : 'End'
        } time column not found in sheet`,
      );
      return {
        message: `Error: ${
          messageType === 'start' ? 'Start' : 'End'
        } time column not found in sheet`,
      };
    }

    await this.googleSheetsService.updateSheet(
      sheetName,
      timeColumnIndex - 1,
      response.data.values.indexOf(dateRow) + 1,
      timeOfDay,
      userName,
    );

    const slackMessage =
      messageType === 'start'
        ? `${userName}さんが勤務を開始しました。`
        : `${userName}さんが退勤しました。`;
    await this.slackService.postMessage(process.env.CHANNEL_ID, slackMessage);

    return {
      message:
        messageType === 'start' ? '勤務を開始しました。' : '退勤しました。',
    };
  }

  async startWork(attendanceData: IAttendanceData) {
    return this.processTime(attendanceData, 'start');
  }

  async endWork(attendanceData: IAttendanceData) {
    return this.processTime(attendanceData, 'end');
  }
}
