const BubbleSort = (n, arr) => {
  let flag = true;
  let count = 0;
  let numArr = arr.map(item => {
    return parseInt(item.split("").pop())
  })

  while (flag) {
    flag = false;
    for (let i=n-1; i>0; i--) {
      let tmp = 0;
      if (numArr[i-1] > numArr[i]) {
        tmp = arr[i];
        arr[i] = arr[i-1];
        arr[i-1] = tmp;
        numArr = arr.map(item => {
          return parseInt(item.split("").pop())
        })
        count += 1;
        flag = true;
      }
    }
  }
  return arr;
}

const SelectionSort = (n, arr) => {
  let count = 0;
  let numArr = arr.map(item => {
    return parseInt(item.split("").pop())
  })

  for (let i = 0; i<n-1; i++) {
    let min = numArr[i];
    let index = 0;
    for (let j = i+1; j<n; j++) {
      if (numArr[j] < min) {
        min = numArr[j];
        index = j;
      }
    }
    if (numArr[i] !== min) {
      let tmp = arr[i];
      arr[i] = arr[index];
      arr[index] = tmp;
      numArr = arr.map(item => {
        return parseInt(item.split("").pop())
      })
      count += 1;
    }
  }
  return arr;
}

const isStableSort = (bubble, selection) => {
  const isSame = bubble.every((item, index) => {
    return item === selection[index]
  })
  return isSame;
}

function Main(input) {
  let array = input.split("\n");
  var n=array[0].split(" ").map(Number);
  let arr = array[1].split(" ");

  const arr1 = [...arr];
  const arr2 = [...arr];

  const bubbleResult = BubbleSort(n, arr1)
  const selectionResult = SelectionSort(n, arr2)
  const isStable = isStableSort(bubbleResult, selectionResult)

  console.log(bubbleResult.join(" "));
  console.log("Stable");
  console.log(selectionResult.join(" "));
  console.log(isStable ? "Stable" : "Not stable");
}

Main(require("fs").readFileSync("/dev/stdin", "utf8"));