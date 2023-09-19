//Array เป็น Data Structure ที่ประกอบด้วยข้อมูลหลายๆ ข้อมูลที่เป็นข้อมูลประเภทเดียวกัน
//Array เอามาใช้กับภาษาโปรแกรมในเรื่องของ Variable (ตัวแปร)

//ตัวแปร(Variable) มีหน้าที่เก็บข้อมูลการเอาตัวแปรไปใช้งาน คือ กำหนดค่าให้มันใหม่ หรือ เอาค่าที่มันเก็บมาใช้

let x = 10
const Y = 20
let data1 = [10, 20, 30, 10, 40]
let data2 = ['hi', 'hey', 'hoo']

console.log(x)
x = 100
console.log(Y)
//Y = 200 -> error เพราะเป็นค่าคงที่ (constant) เป็นตัวแปรที่เปลี่ยนค่าไม่ได้
console.log(data1[2])
console.log(data1[1])
data2[1] = 'hello'
console.log(data2[1])
console.log(data2)
data2.push('Wow')
console.log(data2)
data2.pop()
data2.pop()
console.log(data2)
//--------------------------------------------
let data3 = [10, 20, 'AAA', 50.55]
console.log(`Data 3 มีทั้งหมด ${data3.length}`)
console.log(data3[2])