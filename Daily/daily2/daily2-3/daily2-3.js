// 1-1
const savedFile = {
  name: 'profile',
  extension: 'jpg',
  size: 29930
}
// function fileSummary(file) {
//     console.log(`The file ${file.name}.${file.extension} is size of ${file.size} bytes.`)
// }
// fileSummary(savedFile);

// 1. object destructuring을 활용해 리팩토링
console.log(`The file ${savedFile.name}.${savedFile.extension} is size of ${savedFile.size} bytes.`)

// // 1-2
const data = {
  username: 'myName',
  password: 'myPassword',
  email: 'my@mail.com',
}

// const username = data.username
// const password = data.password
// const email = data.email

// 1. object destructuring을 활용해 리팩토링
console.log(data.username, data.password, data.email)
const {username} = data
const {password} = data
const {email} = data
console.log(username)
console.log(password)
console.log(email)


// // 2
function addNumbers(a,b,c,d,e) {
  const numbers = [a, b, c, d, e];
  return numbers.reduce((sum, number) => { 
    return sum + number
  }, 0)
}
console.log(addNumbers(1,2,3,4,5))

// 2. Rest operator를 활용해 리팩토링





// // 3-1
const defaultColors = ['red', 'green', 'blue'];
const favoriteColors = ['navy', 'black', 'gold', 'white']
// const palette = defaultColors.concat(myFavoriteColors);

// 3. Spread operator를 활용해 리팩토링
const palette = [...defaultColors, ...favoriteColors]
console.log(palette)

// // 3-2
const info1 = { name: 'Tom', age: 30 }
const info2 = { isMarried: true, balance: 3000 }
// const fullInfo = Object.assign(info1, info2)

// 3. Spread operator를 활용해 리팩토링
const fullInfo = {
  ...info1,
  ...info2
}
console.log(fullInfo)