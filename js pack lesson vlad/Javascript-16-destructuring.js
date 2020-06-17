// // Arrays
// // function calcValues(a,b) {
// //     return [
// //         a+b,
// //         //a-b,
// //         undefined,
// //         a*b,
// //         a/b
// //     ]
// // }
// //
// // const [sum,sub ='Вычитания нет',mult, ...other] = calcValues(42,10)
// // // const result = calcValues(42,10)
// // // // const sum = result[0]
// // // // const sub = result[1]
// // // const [sum, sub] = result //сокращенние
// // // console.log(sum,sub)
// // console.log(sum,mult,other,sub)
//
// // Objects
// const person = {
//     name:'Vladimir',
//     age:25,
//     address:{
//         country:'Russia',
//         city:'Moscow'
//     }
// }
//
// // const {name:firstName='Без имени',
// //     age,
// //     car = 'Машины нет',
// //     address: {city:homeTown,country}
// // } = person
// // console.log(firstName, age, car,homeTown,country)
//
// // const {name, ...info} = person
// // console.log(name,info)
//
// function logPerson({name:firstName,age}) {
//     console.log(firstName +' '+age)
// }
//
// logPerson(person)