// This function inserts an element into an array at a given index.

function insert(arr, index, item, size){
  let i = size;
  while(i >=index){
    arr[i+1] = arr[i];
    i--
  }
  arr[index] = item;
  size = size + 1;
}

insert([4, 8, 16, 20], 2, 12, 3)