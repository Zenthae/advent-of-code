import { readInput } from '@advent-of-code/inputs';

interface Direction {
  direction: 'forward' | 'up' | 'down';
  value: number;
}

interface Position {
  horizontal: number;
  depth: number;
  aim: number;
}

const data = readInput(2, 1).map((line) => {
  const _ = line.split(' ');

  return {
    direction: _[0],
    value: parseInt(_[1]),
  } as Direction;
});

const position: Position = {
  horizontal: 0,
  depth: 0,
  aim: 0,
};

data.forEach((direction) => {
  switch (direction.direction) {
    case 'forward':
      position.horizontal += direction.value;
      position.depth += position.aim * direction.value;
      break;
    case 'up':
      // Going upward is reducing the aim
      position.aim -= direction.value;
      break;
    case 'down':
      // Going downward is increasing the aim
      position.aim += direction.value;
      break;
  }
});

console.table(position);

const result = position.horizontal * position.depth;

console.log('Part Two: ', result);
