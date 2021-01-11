function koch(d, p1, p2) {
  // ベース条件。dは再帰関数の深さ。
  if (d === 0) return;

  const s = [(2*p1[0] + p2[0]) / 3, ([2*p1[1] + p2[1]]) / 3];
  const t = [(p1[0] + 2*p2[0]) / 3, ([p1[1] + 2*p2[1]]) / 3];
  const u = [(t[0] - s[0])*Math.cos(Math.PI /3) - (t[1] - s[1])*Math.sin(Math.PI /3) + s[0], (t[0] - s[0])*Math.sin(Math.PI /3) + (t[1] - s[1])*Math.cos(Math.PI /3) + s[1]];

  koch(d-1, p1, s)
  console.log(s[0], s[1])

  koch(d-1, s, u)
  console.log(u[0], u[1])

  koch(d-1, u, t)
  console.log(t[0], t[1])

  koch(d-1, t, p2)
}

function Main(input) {
  let inp = input.trim().split("\n");
  const n = inp[0] - 0;

  const p1 = [0.0, 0.0]
  const p2 = [100.0, 0.0]

  console.log(p1[0], p1[1])

  koch(n, p1, p2);

  console.log(p2[0], p2[1])

}

Main(require("fs").readFileSync("/dev/stdin", "utf8"));
