import { User } from '../../entity/User.entity';

export type Req = {
  currentUser: User;
  session: {
    userId: number;
  };
};
