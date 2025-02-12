import { User } from '@/database/schemas/users.schema';
import { createParamDecorator, ExecutionContext } from '@nestjs/common';
import { Request } from 'express';

interface UserRequest extends Request {
  user: User;
}

export const GetUser = createParamDecorator(
  (data: keyof User | undefined, ctx: ExecutionContext) => {
    const request = ctx.switchToHttp().getRequest<UserRequest>();
    const user = request.user as User | undefined;
    return data ? user?.[data] : user;
  },
);
