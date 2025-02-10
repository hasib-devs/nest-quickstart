import { createParamDecorator, ExecutionContext } from '@nestjs/common';
import { Request } from 'express';

export const GetHeader = (headerName: string) =>
  createParamDecorator((_, ctx: ExecutionContext) => {
    const request = ctx.switchToHttp().getRequest<Request>();
    return request.headers[headerName.toLowerCase()];
  })();
