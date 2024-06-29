let me="Bishal"
console.log(me)
console.log(me.length)
console.log(me[1])
console.log(me[2])
let myfriend='saroj'
console.log(myfriend)
console.log(myfriend.length)
console.log(myfriend[3])
console.log(myfriend[4])
for(i of me){
    console.log(i)
}
for(i=0;i<=Object.keys(me.length);i++){
    console.log(Object.keys(me))
    console.log(me[(Object.keys(me))])
}
//Template String
let girl=`Monika`
let boy=`Shinon`
console.log(`His name is ${boy} Her name is ${girl}`)
console.log(`This is an example of escape\'s sequence`)//escape sequence
console.log(`This is an example of escape\ts sequence`)//escape sequence
console.log(`This is an example of escape\ns sequence`)//escape sequence
console.log(`This is an \rexample of escapes sequence`)//escape sequence