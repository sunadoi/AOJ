let count = 0;

function merge(s, left, mid, right) {
  n1 = mid - left;
  n2 = right - mid;

  l = new Array(n1 + 1);
  r = new Array(n2 + 1);

  for (let i = 0; i < n1; i++) {
    l[i] = s[left + i]; // 左半分の配列をコピーして作成
  }
  for (let i = 0; i < n2; i++) {
    r[i] = s[mid + i]; // 右半分の配列をコピーして作成
  }

  const infty = 1000000000000000000000000000;
  l[n1] = infty;
  r[n2] = infty;

  let i = 0;
  let j = 0;
  for (let k = left; k < right; k++) {
    count++
    // どちらかが端まで行くと、値がinftyになるので必ずもう一方が選ばれる
    // 左側を採用
    if (l[i] <= r[j]) {
      s[k] = l[i]
      i++
    // 右側を採用
    } else {
      s[k] = r[j];
      j++
    }
  }
}

function mergeSort(s, left, right) {
  // ベース条件。
  if (left + 1 >= right) return;

  const mid = Math.floor((left + right) / 2);
  mergeSort(s, left, mid);
  mergeSort(s, mid, right);
  return merge(s, left, mid, right)
}

function Main(input) {
  let inp = input.trim().split("\n");
  const n = inp[0] - 0;
  const s = inp[1].split(" ").map(i => parseInt(i, 10));

  const result = mergeSort(s, 0, n)

  console.log(result.join(" "))
  console.log(count)
}

Main(require("fs").readFileSync("/dev/stdin", "utf8"));
