// const citiesRussia = ['Москва','Санкт-Петербург','Казань','Новосибирск']
// const citiesEurope = ['Берлин','Прага','Париж']
//
// const citiesRussiaWithPopulation = {
//     Moscow:20,
//     SaintPetersburg:8,
//     Kazan: 5,
//     Novosibirsk:3
// }
// const citiesEuropeWithPopulation = {
//     Moscow: 26,
//     Berlin:10,
//     Praha:3,
//     Paris: 2
// }
//
// // //Spread
// // console.log(...citiesRussia)
// // console.log(...citiesEurope)
// //
// // //const allCitites = [...citiesRussia, ...citiesEurope]
// // const allCitites = citiesRussia.concat(citiesEurope)
// // console.log(allCitites)
//
// // console.log({...citiesRussiaWithPopulation})
// // console.log({...citiesRussiaWithPopulation,...citiesEuropeWithPopulation})
// // console.log({...citiesEuropeWithPopulation,...citiesRussiaWithPopulation})
//
// // примеры
// //const numbers =[5,27,42,17]
// // //Math.max() принимает значения, а не массив, но с помощью оператора ...
// // // мы разворачиваем массив на значения
// // console.log(Math.max(5,27,42,17))
// // console.log(Math.max(...numbers)) //новая запись
// // console.log(Math.max.apply(null, numbers)) // старая запись
//
// // const divs = document.querySelectorAll('div')//не массив, а коллекция dom элементов
// // const nodes = [...divs]
// // console.log(nodes)
// // console.log(divs, Array.isArray(divs))
// // console.log(nodes, Array.isArray(nodes))
//
// ////Rest
// function sum(a,b, ...arr) { //Rest
//     console.log(arr)
//     return a+b+arr.reduce((a,i)=> a+i, 0)
// }
//
// const numbers = [1,2,3,4,5]
//
// // console.log(sum(...numbers)) //spread
//
// // // const a = numbers[0]
// // // const b = numbers[1]
// // // const c = numbers[2]
// // const [a,b, ...other] = numbers
// // console.log(a,b, other)
//
// const person = {
//     name:'Max',
//     age:20,
//     city:'Moscow',
//     country: 'Russia'
// }
//
// const {name, age, ...other} = person
//
// console.log(name, age, other)