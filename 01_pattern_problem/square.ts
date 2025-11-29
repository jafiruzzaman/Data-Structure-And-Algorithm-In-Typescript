/**
 * @copyright 2025 Mohammad Jafiruzzaman
 * @description square pattern
 */
/*
 * * * *
 * * * *
 * * * *
 * * * *
 * * * *
 */

function square(n: number) {
  for (let i = 0; i < n; i++) {
    console.log("* ".repeat(n));
  }
}

// output
square(5);
