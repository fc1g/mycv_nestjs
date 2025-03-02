import { createParamDecorator, ExecutionContext } from '@nestjs/common';
import { Req } from '../types/req';

export const CurrentUser = createParamDecorator(
  (data: never, context: ExecutionContext) => {
    const req = context.switchToHttp().getRequest<Req>();

    return req.currentUser;
  },
);
