// const arr = [1, 23, 5, 7, 8, 543, 47, 47, 5, 543];
const arr = [12, 13];

function SecondLargest(arr) {
  let secondLarge = -1;
  if (!arr.length > 1) return secondLarge;

  let largest = -1;

  for (let i = 0; i < arr.length; i++) {
    // if (largest < arr[i]) {
    //   secondLarge = largest;
    //   largest = arr[i];
    // }
    // if (secondLarge < arr[i] && arr[i] < largest) secondLarge = arr[i];

    if (arr[i] > largest && arr[i] > secondLarge) {
      largest = arr[i];
    }
    if (arr[i] < largest && arr[i] > secondLarge) secondLarge = arr[i];
  }

  if (largest === secondLarge) return -1;
  return secondLarge;
}

console.log(SecondLargest(arr));
