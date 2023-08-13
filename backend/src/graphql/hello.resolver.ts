import { Resolver, Query } from '@nestjs/graphql';
import { ObjectType, Field } from '@nestjs/graphql';

@ObjectType()
export class Hello {
  @Field()
  message: string;
}

@Resolver(() => Hello)
export class HelloResolver {
  @Query(() => Hello)
  hello(): Hello {
    return { message: 'Hello World' };
  }
}
