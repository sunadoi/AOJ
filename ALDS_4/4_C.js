function getKey(str) {
  let result = 0;

  const chars = str.split("");
  chars.forEach(char => {
    switch (char) {
      case "A":
        result += 1;
        break;
      case "G":
        result += 2;
        break;
      case "C":
        result += 3;
        break;
      case "T":
        result += 4;
        break;
    }

    result *= 5;
  })

  return result;
}

function h1(key, m) {
  return key % m;
}

function h2(key, m) {
  return 1 + (key % (m-1));
}

function h(key, i, m) {
  return (h1(key, m) + i * h2(key, m)) % m;
}

function insert(dic, key) {
  let i = 0;
  while (true) {
    let j = h(key, i, dic.length);
    if (dic[j] === -1) {
      return j;
    } else {
      i++;
    }
  }
}

function search(dic, key, target) {
  let i = 0;
  while (true) {
    let j = h(key, i, dic.length);
    if (dic[j] === target) {
      return;
    } else if (dic[j] === -1 || i >= dic.length) {
      return null;
    } else {
      i++;
    }
  }
}

function Main(input) {
  let inp = input.trim().split("\n");
  const orders = inp.map((element) => {
    return element.split(" ");
  })
  orders.shift()

  const m = 1000001
  const dic = Array(m).fill(-1)

  orders.forEach((order) => {
    const key = getKey(order[1]);
    if (order[0] === 'insert') {
      const index = insert(dic, key)
      dic[index] = order[1]
    } else {
      const index = search(dic, key, order[1])
      index === null ? console.log("no") : console.log("yes")
    }
  })
}

Main(require("fs").readFileSync("/dev/stdin", "utf8"));
