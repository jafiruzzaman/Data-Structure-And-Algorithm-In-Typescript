/**
 * @copyright 2025 Mohammad Jafiruzzaman
 * @description inverted right triangle
 */
/**
 * * * * * *
 * * * * *
 * * * *
 * * *
 * *
 */
function invertedRightTriangle(n: number): void {
  for (let i = 0; i < n; i++) {
    console.log("* ".repeat(n - i));
  }
}

invertedRightTriangle(5);
