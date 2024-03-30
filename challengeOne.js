// Title: Friend or Foe?
// link: https://www.codewars.com/kata/55b42574ff091733d900002f/solutions/javascript?filter=me&sort=best_practice&invalids=false

const friend = (arr) => {
    let solution = [];
  
    for (let i = 0; i < arr.length; i++) {
      if (arr[i].length === 4) {
        solution.push(arr[i]);
      }
    }
    return solution;
  };
  