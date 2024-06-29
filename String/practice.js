console.log("har\"".length) 
let name="Bishal Maharjan"
console.log(name)
console.log(name.toLowerCase())
let amount="Please give Rs 1000"
console.log(amount.length)
console.log(amount.slice(12,19))
let str="Were you able to do it?"
console.log(str.replace("Were you","Was i"))
console.log(str.includes("you"))
console.log(str.includes("uoy"))
console.log(str.endsWith("it"))
console.log(str.startsWith("Were"))
console.log(str.startsWith("you"))


const word1="The fox jumps over the dog"
const word2="fox"
console.log(`The word "${word2}"${word1.includes(word2)?'is':'isn\'t' } in the word`)

const sentence="This is a sentence"
const word3="Not"
console.log(`The word"${word3}"${sentence.includes(word3)?'is':'isnt'} in the word`)
console.log(`the word"${word3}"${sentence.includes(word3)?'is':'isnt'}in the word`)