import { readInput } from '@advent-of-code/inputs';

const data = readInput(1, 1).map((line) => parseInt(line, 10));

const result = data.reduce((acc, currV, currI, arr) => {
  // No previous value, skip
  if (currI === 0) return acc;

  // If the current value is larger than the previous value, increase the total by one
  if (currV > arr[currI - 1]) return acc + 1;

  return acc;
}, 0);

console.log('Part One: ', result);
