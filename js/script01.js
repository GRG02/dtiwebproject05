console.log("SAU....")
//ตัวแปร var >> global, let >> local, const >> local แต่เปลี่ยนค่าไม่ได้
//Block scope { .... }
//Operator
//Control Flow >> if, if-else, if-else-if, switch, while, do-while, for
//Function *** parameter/return >> np/nr, hp/nr, np/hr, hp/hr

//Expression function / anonymous function
//Function -> default parameter

function funcA(){
    console.log("A...")
}

function funcB(){
    console.log("1")
    console.log("2")
}

funcA()
funcB(10, 20)

function funcC(){
     console.log('C....')
     return 'Hi....'
}

function funcD(x, y){
    return x + y
}

console.log( funcC() )
let wow = funcD(100, 200)

function funcE( a , b , c = 100 ){
    console.log(a + b + c)
}

function funcF( x = 'Hi', y = 100, z = 'Wow Wow Wow' ){
    return x + y + z
}

funcE(10, 20) // -> 130
funcE(10, 20, 30) // -> 60
console.log( funcF() )
console.log( funcF('Hello') )

console.log( 10 + 10 + '10')
console.log( 10 + 10 + 10 )
let info1 = 100
let info2 = 200

console.log( info1 + ' + ' + info2 + ' = ' + (info1 + info2) )

// `___` backtick เป็น string - กด backtick ใช้ Alt + numpad 9 + numpad 6
console.log(`${info1} + ${info2} = ${info1 + info2}`)

//Operator -> Ternary Operator
console.log( 10 > 200 ? 'Hi...' : 'Hey...')
let x = 'Bangna'
let y = 'Bangpoo'
z = x > y ? 'Wow...' : 'Woo...'
console.log(z)
console.log(x > y)
console.log(x == y)
console.log(x < y)