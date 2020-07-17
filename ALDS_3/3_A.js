function Main(input) {
  let array = (input.trim()).split("\n");
  var arr=array[0].split(" ");

  let stack = []
  arr.map(item => {
    let result = 0;
    switch (item) {
      case "+":
        result = stack.pop() + stack.pop()-0;
        return stack.push(result);
      case "-":
        const tmp = stack.pop();
        result = stack.pop() - tmp;
        return stack.push(result);
      case "*":
        result = stack.pop() * stack.pop();
        return stack.push(result);
    }

    return stack.push(item-0);
  })
  console.log(stack.join(" "))
}

Main(require("fs").readFileSync("/dev/stdin", "utf8"));