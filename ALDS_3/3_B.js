function Main(input) {
  let array = (input.trim()).split("\n");
  var nq=array[0].split(" ");
  const n = nq[0]-0;
  const q = nq[1]-0;

  array.shift()
  let time = 0;
  let result = []

  while (array.length > 0) {
    let target = array.shift().split(" ");
    if (target[1]-0 <= q) {
      time += target[1]-0
      result.push(`${target[0]} ${time}`)
    } else {
      time += q;
      array.push(`${target[0]} ${target[1]-q}`)
    }
  }
  result.map(item => {
    console.log(item)
  })
}

Main(require("fs").readFileSync("/dev/stdin", "utf8"));