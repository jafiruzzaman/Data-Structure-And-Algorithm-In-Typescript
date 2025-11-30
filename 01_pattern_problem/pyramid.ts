/**
 * @constant Mohammad Jafiruzzaman
 * @description Pyramid Pattern
 */
/**
    *
   ***
  *****
 *******
*********
 */
function Pyramid(n: number): void {
  for (let i = 0; i < n; i++) {
    // space
    let space = " ".repeat(n - i - 1);
    // star
    let star = "*".repeat(2 * i + 1);
    console.log(space + star);
  }
}

Pyramid(5);
