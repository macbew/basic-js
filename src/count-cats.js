import { NotImplementedError } from '../extensions/index.js';

/**
 * Given matrix where you have to find cats by ears "^^"
 *
 * @param {Array<Array>} matrix 
 * @return {Number} count of cats found
 *
 * @example
 * countCats([
 *  [0, 1, '^^'],
 *  [0, '^^', 2],
 *  ['^^', 1, 2]
 * ]) => 3`
 *
 */
export default function countCats(/* matrix */) {
  //throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  let arr=arguments[0];
  let counter = 0;
 console.log(arguments.length)
 for ( let i = 0; i<arr.length; i++){
    for( let o=0; o<arr[i].length; o++){
     if (arr[i][o]==='^^'){counter++}
 }}
 return counter;
}
