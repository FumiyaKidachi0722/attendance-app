// attendance/attendance.resolver.ts
import { Resolver, Mutation, Args } from '@nestjs/graphql';
import { AttendanceService } from 'attendance/attendance.service';
import { ArgsType, Field, InputType, ObjectType } from '@nestjs/graphql';

@InputType()
export class AttendanceData {
  @Field()
  userName: string;

  @Field()
  time: string;
}

@ArgsType()
export class StartWorkArgs {
  @Field(() => AttendanceData)
  attendanceData: AttendanceData;
}

@ObjectType()
export class WorkResponse {
  @Field()
  message: string;
}

@Resolver('Attendance')
export class AttendanceResolver {
  constructor(private readonly attendanceService: AttendanceService) {}

  @Mutation(() => WorkResponse)
  startWork(@Args() args: StartWorkArgs): Promise<WorkResponse> {
    return this.attendanceService.startWork(args.attendanceData);
  }

  @Mutation(() => WorkResponse)
  endWork(@Args() args: StartWorkArgs): Promise<WorkResponse> {
    return this.attendanceService.endWork(args.attendanceData);
  }
}
