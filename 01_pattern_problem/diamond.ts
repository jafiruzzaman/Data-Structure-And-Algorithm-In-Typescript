/**
 * @constant Mohammad Jafiruzzaman
 * @description Diamond
 */
/*
    *
   ***
  *****
 *******
*********
 *******
  *****
   ***
    *

 */
function diamond(n: number): void {
  // first print pyramid
  for (let i = 0; i < n; i++) {
    let space = " ".repeat(n - i - 1);
    let star = "*".repeat(2 * i + 1);
    console.log(space + star);
  }
  // second print inverted-pyramid //! [Make sure to start from n-2]
  for (let i = n - 2; i >= 0; i--) {
    let space = " ".repeat(n - i - 1);
    let star = "*".repeat(2 * i + 1);
    console.log(space + star);
  }
}

diamond(5);
