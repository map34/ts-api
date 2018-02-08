const delay = (time: number): Promise<any> => {
  return new Promise((resolve) => setTimeout(resolve, time));
};

const asyncAwait = async (): Promise<any> => {
  console.log('Knock, knock!');
  await delay(1000);
  console.log('Who\'s there?');
  await delay(1000);
  console.log('async/await!');
};

asyncAwait();
