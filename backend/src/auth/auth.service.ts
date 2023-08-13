import { Injectable } from '@nestjs/common';
import { PrismaService } from 'other/prisma.service';
import * as crypto from 'crypto-js';
import { ObjectType, Field } from '@nestjs/graphql';

@ObjectType()
export class LoginResponse {
  @Field()
  token: string;

  @Field()
  userName: string;
}

@Injectable()
export class AuthService {
  constructor(private readonly prisma: PrismaService) {}
  hashPassword(password: string): string {
    const hashedPassword = crypto.SHA256(password).toString();
    return hashedPassword;
  }

  async validateUser(
    userName: string,
    password: string,
  ): Promise<LoginResponse | null> {
    const hashedPassword = this.hashPassword(password);

    const user = await this.prisma.prisma.user.findUnique({
      where: { name: userName },
    });

    if (user && hashedPassword === user.password) {
      return { userName: user.name, token: 'OK' };
    }

    return null;
  }
}
