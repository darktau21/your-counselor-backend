import { ConfigService } from '@nestjs/config';
import { NestFactory } from '@nestjs/core';
import {
  FastifyAdapter,
  NestFastifyApplication,
} from '@nestjs/platform-fastify';

import { AppModule } from './app.module';
import { Env } from './env.interface';

async function bootstrap() {
  const app = await NestFactory.create<NestFastifyApplication>(
    AppModule,
    new FastifyAdapter({ logger: process.env.NODE_ENV === 'development' }),
  );

  const config = app.get(ConfigService<Env>);
  const PORT = config.get('PORT', { infer: true });
  const HOST = config.get('HOST', { infer: true });

  if (!PORT || !HOST) {
    throw new Error('Host and port should be declared');
  }

  await app.listen(PORT, HOST);
}
bootstrap();
