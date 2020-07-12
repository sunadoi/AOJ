function Main(input) {
  let array = input.split("\n");
  var n=array[0].split(" ").map(Number);
  let arr = array[1].split(" ").map(Number);
  console.log(arr.join(" "));

  for (let i=1; i<arr.length; i++) {
    let v = arr[i];
    let j = i-1;

    while (j>=0 && arr[j] > v) {
      arr[j+1] = arr[j];
      j -= 1;
      arr[j+1] = v
    }
    console.log(arr.join(" "))
  }
}

Main(require("fs").readFileSync("/dev/stdin", "utf8"));