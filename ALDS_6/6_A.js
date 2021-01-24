function countingSort(a, b, max) {
  const counting = [];
  // ex. a: [4, 5, 0, 3, 1, 5, 0, 5]の場合 [0, 0, 0, 0, 0, 0]
  for (let i = 0; i <= max; i++) {
    counting[i] = 0; // 初期化
  }

  // counting[i]にiの出現数を記録
  // ex. c: [2, 1, 0, 1, 1, 3]
  for (let j = 0; j < a.length; j++) {
      counting[a[j]]++;
  }

  // counting[i]にi以下の出現数を記録する
  // ex. c: [2, 3, 3, 4, 5, 8]
  for (let i = 1; i <= max; i++) {
    counting[i] += counting[i - 1]
  }

  for (let j = a.length - 1; j >= 0; j--) {
    b[counting[a[j]] - 1] = a[j]
    counting[a[j]]--;
  }

  return b;
}

function Main(input) {
  let inp = input.trim().split("\n");
  const n = inp[0] - 0;
  const a = inp[1].split(" ").map(i => parseInt(i, 10));
  const b = new Array(n);

  const result = countingSort(a, b, 10000)

  console.log(result.join(" "))
}

Main(require("fs").readFileSync("/dev/stdin", "utf8"));

