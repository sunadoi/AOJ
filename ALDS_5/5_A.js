function calc(i, a, m) {
  if (i >= a.length || m < 0) return false;
  if (a[i] === m) return true;

  // 再帰関数の中でtrueを返した時点で、元の関数もtrueを返すようにする。
  // i番目を足す場合
  if (calc(i+1, a, m-a[i])) return true;

  // i番目を足さない場合
  if(calc(i+1, a, m)) return true;

  // 再帰関数の中で1度もtrueにならなかった場合にfalseを返す。
  return false;
}

function Main(input) {
  let inp = input.trim().split("\n");
  const n = inp[0] - 0;
  const a = inp[1].split(" ").map(i => parseInt(i, 10));
  const ms = inp[3].split(" ").map(i => parseInt(i, 10));

  ms.forEach(m => {
    const result = calc(0, a, m);
    if (result) {
      console.log("yes")
    } else {
      console.log("no")
    }
  })

}

Main(require("fs").readFileSync("/dev/stdin", "utf8"));
