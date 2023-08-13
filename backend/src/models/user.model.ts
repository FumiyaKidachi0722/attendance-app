// /root/dev/attendance-app/backend/src/models/user.model.ts

import { InputType } from '@nestjs/graphql';

@InputType()
export class UserWhereUniqueInput {
  name: string;
  sheetId: string;
}
