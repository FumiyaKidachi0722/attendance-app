// src/attendance/services/google-sheets.service.ts
import { Injectable, Inject } from '@nestjs/common';
import { google } from 'googleapis';
import { PrismaService } from 'other/prisma.service';

@Injectable()
export class GoogleSheetsService {
  constructor(
    @Inject(PrismaService)
    private readonly prisma: PrismaService,
  ) {}

  async getSheetIdByUserName(userName: string) {
    if (!userName) {
      throw new Error('User name is missing');
    }
    const user = await this.prisma.prisma.user.findUnique({
      where: { name: userName },
    });
    return user?.sheetId;
  }

  public async authorize() {
    const auth = new google.auth.JWT(
      process.env.GOOGLE_CLIENT_EMAIL,
      null,
      process.env.GOOGLE_PRIVATE_KEY,
      ['https://www.googleapis.com/auth/spreadsheets'],
    );

    await auth.authorize();
    return auth;
  }

  public async getSheetsInstance() {
    return google.sheets({
      version: 'v4',
      auth: await this.authorize(),
    });
  }

  public async getSheetData(sheetName: string) {
    const sheets = await this.getSheetsInstance();
    const sheetId = process.env.SHEET_ID;

    return sheets.spreadsheets.values.get({
      spreadsheetId: sheetId,
      range: `${sheetName}!A:Z`,
    });
  }

  public async updateSheet(
    sheetName: string,
    column: number,
    row: number,
    value: any,
    userName: string,
  ) {
    const sheets = await this.getSheetsInstance();
    const sheetId: string | undefined = await this.getSheetIdByUserName(
      userName,
    );

    if (!sheetId) {
      throw new Error(`Sheet ID not found for user: ${userName}`);
    }

    return sheets.spreadsheets.values.update({
      spreadsheetId: sheetId,
      range: `${sheetName}!${String.fromCharCode(66 + column)}${row}`,
      valueInputOption: 'USER_ENTERED',
      requestBody: {
        values: [[value]],
      },
    });
  }
}
