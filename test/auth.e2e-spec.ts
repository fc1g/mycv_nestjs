import { INestApplication } from '@nestjs/common';
import { Test, TestingModule } from '@nestjs/testing';
import * as request from 'supertest';
import { App } from 'supertest/types';
import { AppModule } from '../src/app.module';

describe('Authentication System', () => {
  let app: INestApplication<App>;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  it('handles a signup request', async () => {
    const email = 'test@email.com';
    const password = 'testPass';

    const res = await request(app.getHttpServer())
      .post('/auth/signup')
      .send({
        email,
        password,
      })
      .expect(201);
    const { id, email: email_1 } = res.body as { id: number; email: string };
    expect(id).toBeDefined();
    expect(email_1).toEqual(email_1);
  });

  it('signup as a new user then get the currently logged in user', async () => {
    const email = 'test@email.com';
    const password = 'testPass';

    const res = await request(app.getHttpServer())
      .post('/auth/signup')
      .send({ email, password })
      .expect(201);

    const cookie = res.get('Set-Cookie')!;
    const { body } = (await request(app.getHttpServer())
      .get('/auth/whoami')
      .set('Cookie', cookie)
      .expect(200)) as { body: { email: string } };

    expect(body.email).toEqual(email);
  });
});
