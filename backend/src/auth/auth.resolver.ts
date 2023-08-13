import { Args, Mutation, Resolver } from '@nestjs/graphql';
import { AuthService } from 'auth/auth.service';
import { UnauthorizedException } from '@nestjs/common';
import { ObjectType, Field } from '@nestjs/graphql';

@ObjectType()
export class LoginResponse {
  @Field()
  token: string;

  @Field()
  userName: string;
}

@Resolver()
export class AuthResolver {
  constructor(private authService: AuthService) {}

  @Mutation(() => LoginResponse)
  async login(
    @Args('name') userName: string,
    @Args('password') password: string,
  ) {
    const user = await this.authService.validateUser(userName, password);
    if (!user) {
      throw new UnauthorizedException(
        'ユーザー名またはパスワードが正しくありません。',
      );
    }
    return user;
  }
}
