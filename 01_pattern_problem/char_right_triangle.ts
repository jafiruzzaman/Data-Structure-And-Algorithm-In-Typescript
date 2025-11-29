/**
  @copyright Mohammad Jafiruzzaman
  @description right triangle pattern
*/

/*
  A
  A B
  A B C
  A B C D
  A B C D E
*/

function charRightTriangle(n: number) {
  for (let i = 0; i < n; i++) {
    let char = String.fromCharCode(65 + i) + " ";
    console.log(char.repeat(i + 1));
  }
}

charRightTriangle(5);
