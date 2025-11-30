/**
 * @copyright Mohammad Jafiruzzaman
 * @description hollow square pattern
 */

/**
 * * * * * * *
 * *         *
 * *         *
 * *         *
 * *         *
 * * * * * * *
 */
function hollowSquare(n: number): void {
  for (let i = 1; i <= n; i++) {
    if (i == 1 || i == n) {
      console.log("* ".repeat(n));
    } else {
      console.log("* " + "  ".repeat(n - 2) + "*"); // ! Note: "* "--> for left star "  " --> print space(2) "*"--> right-star
    }
  }
}

hollowSquare(7);
