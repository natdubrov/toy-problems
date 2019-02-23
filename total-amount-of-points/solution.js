function points(games){
  let count = 0;
  for (var i = 0; i < games.length; i++) {
    let score = games[i]
    let x = score[0];
    let y = score [2];
    if (x > y){
      count = count + 3;
    } else if (x < y){
      count = count + 0;
    } else {
      count = count + 1;
    }
  }
  return count
}
const input = ["0:0","1:0","0:0","1:1","2:2","6:1","0:2","2:0","3:0","4:2"];
const output = points(input);
console.log(output);
