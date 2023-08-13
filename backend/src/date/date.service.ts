// src/date/date.service.ts
export class DateService {
  toJapanTime(time: string) {
    const dateObj = new Date(time);
    return new Date(
      dateObj.toLocaleString('ja-JP', { timeZone: 'Asia/Tokyo' }),
    );
  }

  formatJapanTime(japanTime: Date) {
    return japanTime.toLocaleTimeString('ja-JP', {
      timeZone: 'Asia/Tokyo',
      hour12: false,
    });
  }
}
