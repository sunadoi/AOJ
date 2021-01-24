function partition(a, p, r) {
  const x = a[r];
  let i = p - 1;
  for (let j = p; j < r; j++) {
    if (a[j] <= x) {
      i++
      const temp = a[i]
      a[i] = a[j];
      a[j] = temp;
    }
  }
  a[r] = a[i+1];
  a[i+1] = x;

  a[i + 1] = `[${a[i + 1]}]`
  return a;
}

function Main(input) {
  let inp = input.trim().split("\n");
  const n = inp[0] - 0;
  const a = inp[1].split(" ").map(i => parseInt(i, 10));

  const result = partition(a, 0, a.length - 1)

  console.log(result.join(" "))
}

Main(require("fs").readFileSync("/dev/stdin", "utf8"));
