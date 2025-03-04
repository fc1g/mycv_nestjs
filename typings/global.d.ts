export declare global {
  namespace Express {
    interface Request {
      currentUser?: User;
      session?: {
        userId?: number;
      };
    }
  }
}
