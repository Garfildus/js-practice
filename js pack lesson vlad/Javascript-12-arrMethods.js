// const people =[
//     {name:'Владилен', age:25, budget: 40000},
//     {name:'Елена',    age:17, budget: 3400},
//     {name:'Игорь',    age:49, budget: 50000},
//     {name:'Михаил',   age:15, budget: 1800},
//     {name:'Василиса', age:24, budget: 25000},
//     {name:'Виктория', age:38, budget: 2300},
// ]
//
// ////////ES5
// // for(let i=0;i<people.length;i++){
// //     console.log(people[i])
// // }
//
// ////////ES6
// // for(person of people){
// //     console.log(person)
// // }
//
// ////////ForEach
// // people.forEach(function(person,index, pArr){
// //     console.log(value)
// //     console.log(index)
// //     console.log(pArr)
// // })
// // people.forEach(person=> console.log(person))
//
// ////////Map текущий массив, возвращает(return) новый массив
// // const newPeople = people.map(person=>`${person.name} ${person.age} ${person.age*3}`)
// // console.log(newPeople)
//
// ////////Filter
// // const adults = []
// // for(let i = 0; i<people.length;i++){
// //     if(people[i].age >= 18){
// //         adults.push(people[i])
// //     }
// // }
// // console.log(adults)
// // const adults = people.filter(people => people.age >= 18)
// // console.log(adults)
//
// ////////Reduce
// // let amount = 0
// // for(let i = 0; i<people.length;i++){
// //         amount += people[i].budget
// // }
// // console.log(amount)
//
// // const  amount = people.reduce((total,person)=> total + person.budget,0)
// // console.log(amount)
//
// ////////Find
// // const igor = people.find(people => people.name === 'Игорь')
// // console.log(igor)
//
// ////////FindIndex
// // const igorIndex = people.findIndex(people => people.name === 'Игорь')
// // console.log(igorIndex)
//
// //////// =============================================================
//
// const amount = people
//     .filter(person => person.budget>3000)
//     .map(person =>{
//         return {
//             info: `${person.name} (${person.age})`,
//             budget: Math.sqrt(person.budget)
//         }
//     })
//     .reduce((total,person)=>total+person.budget,0)
//
// console.log(amount)