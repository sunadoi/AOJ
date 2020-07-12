function Main(input) {
  let array = input.split("\n");
  var arr=array[0].split(" ").map(Number);

  let result = -10000000000;
  for (let i = 1; i<array.length; i++) {
    let current = array[i].split(" ").map(Number);
    for (let j = i+1; j<array.length; j++) {
      let next = array[j].split(" ").map(Number);
      let dif = next - current;
      if (dif > result) result = dif;
    }
  }

  console.log(result)
}

Main(require("fs").readFileSync("/dev/stdin", "utf8"));

