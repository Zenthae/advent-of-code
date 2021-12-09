import { readInput } from '@advent-of-code/inputs';

interface Direction {
  direction: 'forward' | 'up' | 'down';
  distance: number;
}

interface Position {
  horizontal: number;
  depth: number;
}

const data = readInput(2, 1).map((line) => {
  const _ = line.split(' ');

  return {
    direction: _[0],
    distance: parseInt(_[1]),
  } as Direction;
});

const position: Position = {
  horizontal: 0,
  depth: 0,
};

data.forEach((direction) => {
  switch (direction.direction) {
    case 'forward':
      position.horizontal += direction.distance;
      break;
    case 'up':
      // Going upward is reducing the depth
      position.depth -= direction.distance;
      break;
    case 'down':
      // Going downward is increasing the depth
      position.depth += direction.distance;
      break;
  }
});

console.table(position);

const result = position.horizontal * position.depth;

console.log('Part One: ', result);
