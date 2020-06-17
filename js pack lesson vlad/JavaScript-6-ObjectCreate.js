// // Дискрипторы по умолчанию false
// // enumerable(перечисление) - если true то данное значение может быть перечисленым(например с помощью for)
// // writable(записываемый) - значение может быть переписано(присвоено новое)
// // configurable - позволяет манипулировать с ключами данного объекта (пример delete obj.prop удалить свойсвто)
// const person = Object.create(
//     {
//         //можем указывать protype нового созданного объекта 'person'
//         // пример
//         calculateAge(){
//             console.log('Age:', new Date().getFullYear() - this.birthYear)
//         }
//     },
//     {
//         name: {
//             value:'Vlad',
//             enumerable:true,
//             writable:true,
//             configurable:true
//         },
//         birthYear:{
//             value: 1994,
//             enumerable:false,
//             writable:false,
//             configurable:false
//         },
//         age:{
//             get(){ //person.age  работает как обычное поле
//                 return new Date().getFullYear() - this.birthYear
//             },
//             set(value){
//                 document.body.style.background = 'red'
//                 console.log('Set age ', value)
//             }
//             // на сетерах и гетерах построенно много фреймворков, чтобы
//             // смотреть за изменением определённых полей и чтобы
//             // выполнять дополнительную логику (пример для отрисовки приложения)
//         }
//     }
// )
//
// // person.name = 'Max'
// // person.birthYear = 2000
//
//
// //Получаем ключи объекта и функции из proto объекта
// //.hasOwnProperty(key) использовать всегда, когда делаем итерацию for in
// for(let key in person){
//     if(person.hasOwnProperty(key)){//исключаем пробег по __proto__
//         console.log('Key:',key,person[key])
//     }
//
// }
//
//
// // const person2 ={
// //     name:'Person2',
// //     birthYear: 1995
// // }
// // for(let key in person2){
// //     console.log('Key2:',key)
// // }
//
