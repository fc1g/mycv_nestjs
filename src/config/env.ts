const env = process.env;

export const DB_TYPE = env.DB_TYPE as string;
export const DB_HOST = env.DB_HOST as string;
export const DB_PORT = parseInt(env.DB_PORT!);
export const DB_PASSWORD = env.DB_PASSWORD as string;
export const DB_USERNAME = env.DB_USERNAME as string;
export const DB_NAME = env.DB_NAME as string;
export const DB_SYNC = JSON.parse(env.DB_SYNC as string) as boolean;
export const DB_LOGGING = JSON.parse(env.DB_LOGGING as string) as boolean;
