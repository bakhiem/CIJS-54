// const, let, var

// function compareLetVar() {
//   const a
//   console.log(a)
//   if(true) {
//     let a = 1
//     var b = 1
//   }
//   const a = 1
//   a = 2
//   console.log(a)
// }
const name = 'Ahihi'
const str = 'He is' + name + ' very handsome'
const str2 = `He is ${name} very handsome`

console.log(str.length)

// array
const arr = [1, 2, 3, 4]
// them vao cuoi arr
arr.push(5)
// them vao dau arr
arr.unshift(0)
for(const item of arr) {
  console.log(item)
}
// Object
const student = {
  name: 'nguyen van a',
  age: 18,
  school: 'ABC',
  post: function () {
    console.log('post bai')
  }
}
console.log(student.post())