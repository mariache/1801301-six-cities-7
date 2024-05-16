import { PinoLogger } from './shared/libs/logger/index.js';
import { RestApplication } from './application/index.js';

async function bootstrap() {
  const logger = new PinoLogger();

  const application = new RestApplication(logger);
  await application.init();
}

bootstrap();
