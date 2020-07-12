function Main(input) {
  let array = input.split("\n");
  var n=array[0].split(" ").map(Number);
  let arr = array[1].split(" ").map(Number);

  let count = 0;

  for (let i = 0; i<n-1; i++) {
    let min = arr[i];
    let index = 0;
    for (let j = i+1; j<n; j++) {
      if (arr[j] < min) {
        min = arr[j];
        index = j;
      }
    }
    if (arr[i] !== min) {
      let tmp = arr[i];
      arr[i] = min;
      arr[index] = tmp;
      count += 1;
    }
  }
  console.log(arr.join(" "));
  console.log(count);
}

Main(require("fs").readFileSync("/dev/stdin", "utf8"));