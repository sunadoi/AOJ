function Main(input) {
  let array = (input.trim()).split("\n");
  var n=array[0]-0;

  array.shift()
  let result = ""

  array.forEach(element => {
    let order = element.split(" ")
    if (order[0] === "insert") {
      result = result === "" ? order[1] : order[1] + " " + result;
    } else if (order[0] === "delete") {
      let list = result.split(" ")
      const index = list.indexOf(order[1]);
      if (index !== -1) {
        list.splice(index, 1);
        result = list.join(" ");
      }
    } else if (order[0] === "deleteFirst") {
      while (!isNaN(parseInt(result[0]))) {
        result = result.slice(1);
      };
      result = result.trim();
    } else if (order[0] === "deleteLast") {
      while(!isNaN(parseInt(result[result.length - 1]))) {
        result = result.slice(0, -1);
      }
      result = result.trim();
    }
  });

  console.log(result.trim())
}

Main(require("fs").readFileSync("/dev/stdin", "utf8"));