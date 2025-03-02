import { CanActivate, ExecutionContext } from '@nestjs/common';
import { Req } from '../types/req';

export class AuthGuard implements CanActivate {
  canActivate(context: ExecutionContext) {
    const req = context.switchToHttp().getRequest<Req>();

    return !!req.session.userId;
  }
}
