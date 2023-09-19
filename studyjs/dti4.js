//Object คือ ก้อนวัตถุ เอาใช้กับภาษาโปรแกรมในเรื่องของตัวแปร (Variable)

var data0 = 10
let data1 = 20 //ตัวแปรธรรมดา
const data2 = 30 //ตัวแปรประเภท ค่าคงที่
let data3 = [10, 20, 30, 40] //ตัวแปรอาร์เรย์
let data4 = { //ตัวแปรประเภท ออปเจ็กค์
    'a' : 20, // -> key : value
    'b' : 'Hi',
    'c' : 55.555,
    'd' : [1, 2, 3, 4, 5],
    'e' : {
        'x' : 111,
        'y' : 'Wow'
    }
}

//อยากได้ผลรวมของ 10 กับ 40 ของ data3
console.log(data3[0] + data3[3])
//อยากได้ 20 ของ data4
console.log(data4.a)
//อยากได้ผลรวมของ 20 กับ 55.555 ของ data4
console.log(data4.a + data4.c)
//อยากได้ 4 ของ data4
console.log(data4.d[3])
//อยากได้ Wow ของ data4
console.log(data4.e.y)