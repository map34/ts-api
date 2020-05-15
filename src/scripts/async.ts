import { logger } from '../services';

const delay = (time: number): Promise<any> => {
  return new Promise((resolve) => setTimeout(resolve, time));
};

export const asyncAwait = async (): Promise<any> => {
  logger.info('Knock, knock!');
  await delay(1000);
  logger.info('Who\'s there?');
  await delay(1000);
  logger.info('async/await!');
};
