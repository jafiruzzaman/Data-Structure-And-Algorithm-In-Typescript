/**
 * @copyright 2025 Mohammad Jafiruzzaman
 * @description character square pattern
 */

/*
  A A A A A
  B B B B B
  C C C C C
  D D D D D
  E E E E E
 */
function charSquare(n: number) {
  for (let i = 0; i < n; i++) {
    let ch = String.fromCharCode(65 + i) + " ";
    console.log(ch.repeat(n));
  }
}

charSquare(5);
