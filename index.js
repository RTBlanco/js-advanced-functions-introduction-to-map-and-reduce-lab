// Your code here
function mapToNegativize(arr){
  let newArr = []
  for (let i = 0; i < arr.length; i++) {
    newArr.push(-1 * arr[i])
  }
  return newArr
}

function mapToNoChange(src) {
  return src
}

function mapToDouble(src) {
  let arr = []
  for (let i = 0; i < src.length; i++){
    arr.push(2 * src[i])
  }
  return arr
}

function mapToSquare(src) {
  let arr = []
  for (let i = 0; i < src.length; i++){
    arr.push(src[i] ** 2)
  }
  return arr
}

function reduceToTotal(src, start = 0) {
  for(let i = 0; i < src.length; i++){
    start += src[i]
  }
  return start
}

function reduceToAllTrue(src){
  for(const i of src) {
    if(!i){
      return false
    }
  }
  return true
}

function reduceToAnyTrue(src) {
  for(const i of src) {
    if(i){
      return true
    }
  }
  return false
}