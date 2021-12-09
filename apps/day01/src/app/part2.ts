import { readInput } from '@advent-of-code/inputs';

const data = readInput(1, 1).map((line) => parseInt(line, 10));

const result = data.reduce((acc, currV, currI, arr) => {
  // Current window
  const currWindow = arr.slice(currI, currI + 3);

  // Next window
  const nextWindow = arr.slice(currI + 1, currI + 4);

  // Check if current window is a triple
  if (currWindow.length !== 3 || nextWindow.length !== 3) return acc;

  // If the current window is smaller than the next one, increase the total by one
  if (currWindow.reduce(sum) < nextWindow.reduce(sum)) return acc + 1;

  return acc;
}, 0);

console.log('Part Two: ', result);

function sum(acc: number, curr: number): number {
  return acc + curr;
}
