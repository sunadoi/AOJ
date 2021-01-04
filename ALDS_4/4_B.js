function binarySearch(n, s, target) {
  let left = 0;
  let right = n;
  while (left < right) {
    let middle = Math.floor((left + right) / 2);

    if (s[middle] === target) return true;

    if (s[middle] > target) {
      right = middle;
    } else {
      left = middle + 1;
    }
  }

  return false;
}

function Main(input) {
  let array = input.trim().split("\n");
  const n = array[0] - 0;
  const s = array[1].split(" ").map(i => parseInt(i, 10));
  const q = array[2] - 0;
  const t = array[3].split(" ").map(i => parseInt(i, 10));

  let count = 0;
  t.forEach(num => {
    result = binarySearch(n, s, num);
    if (result) {
      count += 1;
    }
  });

  console.log(count)
}

Main(require("fs").readFileSync("/dev/stdin", "utf8"));
