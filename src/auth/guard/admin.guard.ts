import { CanActivate, ExecutionContext } from '@nestjs/common';
import { Role } from '../utils/role';

export class AdminGuard implements CanActivate {
  canActivate(context: ExecutionContext) {
    const req = context
      .switchToHttp()
      .getRequest<{ currentUser: { role: Role } }>();

    if (!req.currentUser || req.currentUser.role !== Role.ADMIN) {
      return false;
    }

    return true;
  }
}
