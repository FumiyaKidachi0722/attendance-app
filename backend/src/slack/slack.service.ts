// src/slack/slack.service.ts
import { Injectable } from '@nestjs/common';
import { WebClient } from '@slack/web-api';

@Injectable()
export class SlackService {
  async postMessage(channel: string, text: string) {
    const slack = new WebClient(process.env.SLACK_TOKEN);

    try {
      await slack.chat.postMessage({
        channel,
        text,
      });
    } catch (error) {
      console.error('Slack message posting error:', error.message);
      throw new Error('Failed to post message to Slack');
    }
  }
}
