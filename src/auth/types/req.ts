import { User } from 'src/entity/User.entity';

export type Req = {
  currentUser: User;
  session: {
    userId: number | null;
  };
};
