import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { COOKIE_KEY } from './config/env';
// eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-require-imports
const cookieSession = require('cookie-session');

void (async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.use(
    // eslint-disable-next-line @typescript-eslint/no-unsafe-call
    cookieSession({
      keys: [COOKIE_KEY],
    }),
  );
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
    }),
  );
  await app.listen(process.env.PORT ?? 3000);
})();
