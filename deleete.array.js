// This function deletes an item at a certain index in an array

function delItem(arr, index, size){
  for(let i = size; i > index; i--){
    arr[i - 1] = arr[i]
    console.log(i)
  }
  arr.length--
  console.log(arr)
}

delItem([1, 2, 4, 5, 7], 3, 4) 