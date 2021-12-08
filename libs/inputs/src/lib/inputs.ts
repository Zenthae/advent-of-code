import { readFileSync } from 'fs';
import { resolve } from 'path';

/**
 * read the input file given by the matching day / part
 * @param dirPath path to the directory containing the file. NO TRAILING SLASH
 * @param day 1, 2, 3, 4, ..., 25
 * @param part 1 or 2
 */
export function readInput<T>(day: number, part: 1 | 2) {
  const lines = readFileSync(
    resolve(__dirname, 'assets', `${day < 10 ? `0${day}` : day}_0${part}.txt`),
    'utf8'
  ).split('\n');

  return lines.map((line) => parseInt(line, 10));
}
