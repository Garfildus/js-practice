//1
const num = 46

// let result
// if(num>20){
//     result = 'More then 20'
// }else{
//     result = 'Less then 20'
// }
const result = num >20 ? 'More then 20 short' : 'Less then 20 short'
//console.log(result)

//2
let variable
let variable2

// (variable !==null && variable !== undefined && variable !== '')  --- variable
// if(variable){
//     variable2 = variable
// } else {
//     variable2 = 'Some vaule'
// }
variable2 = variable || 'Some vaule short'
//console.log(variable2)

//3
// let x
// let y
// let z =42

// let x,y,z=42

//4
let isSame = true
if (isSame === true){}
if (isSame){}
if (isSame !== true){}
if(!isSame){}

//5
const names = ['Igor', 'Elena', 'Olga' ]
for (let i = 0; i< names.length; i++){
    //name[i]
}
//
for (let name of names){} //получить элемент масива
for (let idnex in names){}//получить индексы
//
function logArrayItems(el,index,array) {
    console.log(`names[${index}] = ${el}`)
}
//names.forEach(logArrayItems)

//6
// let port
// if(process.env.PORT){
//     port = process.env.PORT
// } else {
//     port = 4200
// }

const port = process.env.PORT || 4200

// for (let i = 0; i <1000000; i++){}
// for (let i = 0; i <10e6; i++){}

//8
const a=1, b=2
//const myObj={a:a, b:b}
const myObj={a,b}

//9
// setTimeout(function () {
//     console.log('After 2 seconds')
// }, 2000)
//setTimeout( ()=>console.log('After 2 seconds'),2000)

// function triple(num) {
//     return num*3
// }
const triple = num=>num*3

//10
// function rgb(r,g,b) {
//     if(r===undefined){
//         r=0
//     }
//     if(g===undefined){
//         g=255
//     }
//
//     return `rgb(${r}, ${g},${b})`
// }

const rgb = (r=0,g=255,b) =>`rgb(${r}, ${g},${b})`

//11
// function createUrl(base, domain) {
//     return "http://"+base+"."+domain
// }
const createUrl = (base,domain) =>`http://${base}.${domain}`

//12
// const alert = window.alert
// const confirm = window.confirm
// const prompt = window.prompt

//const {alert,prompt,confirm} = window

//13
const arr = [1, 2, 3]
// const nums = [4, 5, 6].concat(arr)
// const cloned = nums.concat()

//const nums =[...arr, 4, 5, 6]
//const nums =[4, 5, ...arr, 6]
const nums = [4, 5, 6, ...arr]
const cloned = [...nums]

//console.log(cloned)

//14
// console.log(Math.floor(9.7)===9)
// console.log(~~9.7===9)

//15
// console.log(Math.pow(2,3))
// console.log(Math.pow(2,4))
// console.log(Math.pow(4,3))
//
// console.log(2 ** 3)
// console.log(2 ** 4)
// console.log(4 ** 3)

//16
// const int =parseInt('42')
// const float =parseFloat('42.42')

const int =+'42'
const float =+'42.42'

// console.log(typeof int, typeof float)

//17
if([1,2,3].indexOf(3)>-1){}
if(~[1,2,3].indexOf(3)){} // если найдено
if(!~[1,2,3].indexOf(3)){} // если не найдено

if([1,2,3].includes(3)){} // возвращает true или false

//18
const car = {
    model:'Ford',
    year:2019,
    color: 'red'
}

console.log(Object.entries(car)) // массив масивов ключ , значение
console.log(Object.values(car)) // только значения
console.log(Object.keys(car)) // только ключи


