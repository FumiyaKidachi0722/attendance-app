import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { GraphQLModule } from '@nestjs/graphql';
import { Module } from '@nestjs/common';
import { AppService } from 'app.service';
import { AuthModule } from 'auth/auth.module';
import { AttendanceModule } from 'attendance/attendance.module';
import { ConfigModule } from '@nestjs/config';
import { HelloResolver } from 'graphql/hello.resolver';
@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: 'src/graphql.schema.gql',
    }),
    ConfigModule.forRoot(),
    AuthModule,
    AttendanceModule,
    HelloResolver,
  ],
  providers: [AppService],
})
export class AppModule {}
