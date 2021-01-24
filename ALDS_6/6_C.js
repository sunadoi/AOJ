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
  l[n1] = ['l', infty];
  r[n2] = ['r', infty];

  let i = 0;
  let j = 0;
  for (let k = left; k < right; k++) {
    // どちらかが端まで行くと、値がinftyになるので必ずもう一方が選ばれる
    // 左側を採用
    if (l[i][1] <= r[j][1]) {
      s[k] = l[i]
      i++
    // 右側を採用
    } else {
      s[k] = r[j];
      j++
    }
  }

  return s;
}

function mergeSort(s, left, right) {
  // ベース条件。
  if (left + 1 >= right) return;

  const mid = Math.floor((left + right) / 2);
  mergeSort(s, left, mid);
  mergeSort(s, mid, right);
  return merge(s, left, mid, right)
}


function partition(a, p, r) {
  const x = a[r][1];
  let i = p - 1;
  for (let j = p; j < r; j++) {
    if (a[j][1] <= x) {
      i++
      const temp = a[i]
      a[i] = a[j];
      a[j] = temp;
    }
  }
  const temp = a[r];
  a[r] = a[i+1];
  a[i+1] = temp;

  return i + 1;
}

function quickSort(a, p, r) {
  if (p >= r) return;

  const q = partition(a, p, r)
  quickSort(a, p, q-1);
  quickSort(a, q+1, r);
  return a;
}

function Main(input) {
  let inp = input.trim().split("\n");
  const n = inp[0] - 0;

  const a = inp.map((row, index) => {
    if (index !== 0) {
      const splitRow = row.split(" ");
      splitRow[1] = parseInt(splitRow[1], 10);
      return splitRow;
    }
  })
  a.shift();

  const b = [...a]

  const quickResult = quickSort(a, 0, a.length - 1)
  const mergeResult = mergeSort(b, 0, n)

  let stable = true;
  for (let i = 0; i < n; i++) {
    if (quickResult[i] !== mergeResult[i]) {
      stable = false;
      break;
    }
  }

  console.log(stable ? "Stable" : "Not stable")

  quickResult.forEach(result => {
    console.log(`${result[0]} ${result[1]}`);
  })
}

Main(require("fs").readFileSync("/dev/stdin", "utf8"));

