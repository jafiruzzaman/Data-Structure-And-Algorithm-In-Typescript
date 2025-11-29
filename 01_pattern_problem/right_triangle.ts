/**
  @copyright Mohammad Jafiruzzaman
  @description right triangle pattern
*/

/*
 *
 * *
 * * *
 * * * *
 * * * * *
 */

function rightTriangle(n: number) {
  for (let i = 0; i < n; i++) {
    console.log("* ".repeat(i));
  }
}

rightTriangle(5);
