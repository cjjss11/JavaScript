// const name = 'Tom'
// console.log('Hi, my name is' + name)

// // template string을 활용하여 리팩토링
// const string_name = `Hi, my name is ${name}`
// console.log(string_name) 

// // 2
// function add(x, y) {
//   return x + y
// }

// // arrow function으로 리팩토링
const add = (x,y) => x+y;
console.log(add(x,y))

// // 3
// const tom = {
//   name: 'Tom',
//   introduce: function () {
//     console.log('Hi, my name is' + this.name)
//   }
// }

// // function 키워드 없이 리팩토링
// const tom = {
//   name : 'Tom',
//   introduce() {
//     console.log('Hi, my name is' + this.name)
//   }
// }

// // 4
// const url = 'https://test.com'
// const data = { message: 'Hello World!' }

// const request = { url: url, data: data }

// // key, value를 한번씩만 작성하도록 리팩토링
// const request = {url,data}