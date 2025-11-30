/**
 * @copyright Mohammad Jafiruzzaman
 * @description character triangle
 */

function charTriangle(n: number) {
  for (let i = 0; i < n; i++) {
    let row: string = "";
    for (let j = 0; j <= i; j++) {
      row += String.fromCharCode(65 + j) + " ";
    }
    console.log(row);
  }
}

charTriangle(5);
