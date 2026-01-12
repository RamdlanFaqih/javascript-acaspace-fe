// const fruits = ['apel', 'mangga', 'pepaya']
// without destructuring
// const apel = fruits[0]
// const mangga = fruits[1]
// const pepaya = fruits[2]

// with destructuring
// const [a, b, c] = fruits

// console.log(apel)
// console.log(mangga)
// console.log(pepaya)

// destructuring array : swap items
// let a = 'pisang'
// let b = 'strawberry'

// console.log("before swap items: ", a, b);

// [a, b] = [b, a];

// console.log("after swap items: ", a, b)

// const testFunction = (a, b) => {
//     return [a, b]
// }

// const [x, y] = testFunction(12, 5)
// const numbers = testFunction(10, 5)
// const x = numbers[0]
// const y = numbers[1]

// console.log(y)

// const penjumlahan = (a, b) => {
//     return a + b
// }

// const result = penjumlahan(x, y)
// console.log(result)


const profile = {
    id: 1,
    firstName: undefined,
    lastName: "Doe",
    age: 21,
}

// const id = profile.id
// const firstName = profile.firstName
// const lastName = profile.lastName
const biodata = {
    age: 2
}

const {age: ageBiodata} = biodata
const {firstName = "Asep", age, id, lastName} = profile

console.log("Hello" + " " + firstName)
console.log(lastName)
console.log(id)
console.log("age dari profile", age)
console.log("agedari biodata", ageBiodata)





// console.log(testFunction(10, 5)[1])

