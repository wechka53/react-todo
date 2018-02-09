import { getRandomInt } from 'helpers'

it('function should return positive integer', () => {

  const randomValue = getRandomInt(1, 123123124123123);
  expect(randomValue).toBeGreaterThan(0);
});