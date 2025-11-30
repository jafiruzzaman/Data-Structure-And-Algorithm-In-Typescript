/**
 * @constant Mohammad Jafiruzzaman
 * @description Pyramid Pattern
 */

/*
*********
 *******
  *****
   ***
    *

 */
function invertedPyramid(n: number): void {
  for (let i = 0; i < n; i++) {
    let space = " ".repeat(i);
    let star = "*".repeat(2 * (n - i) - 1);
    console.log(space + star);
  }
}
invertedPyramid(5);
