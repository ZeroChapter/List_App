export const idGenerator = (): number => {
  const timestamp = Date.now() % 1000000;
  const random = Math.floor(Math.random() * 10000);
  return timestamp * 10000 + random;
};
