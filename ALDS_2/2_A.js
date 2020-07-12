function Main(input) {
  let array = input.split("\n");
  var n=array[0].split(" ").map(Number);
  let arr = array[1].split(" ").map(Number);

  let flag = true;
  let count = 0;

  while (flag) {
    flag = false;
    for (let i=n-1; i>0; i--) {
      let tmp = 0;
      if (arr[i-1] > arr[i]) {
        tmp = arr[i];
        arr[i] = arr[i-1];
        arr[i-1] = tmp;
        count += 1;
        flag = true;
      }
    }
  }
  console.log(arr.join(" "));
  console.log(count);
}

Main(require("fs").readFileSync("/dev/stdin", "utf8"));