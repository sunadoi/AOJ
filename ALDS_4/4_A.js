function Main(input) {
  let array = input.trim().split("\n");
  const n = array[0] - 0;
  const s = array[1].split(" ");
  const q = array[2] - 0;
  const t = array[3].split(" ");

  let count = 0;
  t.forEach(num => {
    if (s.includes(num)) {
      count += 1;
    }
  });

  console.log(count)
}

Main(require("fs").readFileSync("/dev/stdin", "utf8"));
