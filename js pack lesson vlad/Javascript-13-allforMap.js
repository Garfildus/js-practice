// // Map ключами могут быть объекты. Более гибкие манипуляции, чем с объектами
//
// const obj = {
//     name:'Vlad',
//     age:26,
//     job:'Fullstack'
// }
//
// const entries = [
//     ['name','Vladilen'],
//     ['age',26],
//     ['job','Fullstack'],
// ]
//
// // console.log(Object.entries(obj))
// // console.log(Object.fromEntries(entries))
//
// const mapVal = new Map(entries)
//
// // console.log(mapVal)
// // console.log(mapVal.get('name')) //return 'string'
// mapVal
//     .set('newField',42)
//     .set(obj, 'Value of object')
//     .set(NaN, 'NaN ??')
//
// // // console.log(mapVal.get(obj))
// // // console.log(mapVal.get(NaN))
// // // mapVal.delete('job')
// // console.log(mapVal.has('job'))
// // console.log(mapVal.size)
// // mapVal.clear()
// // console.log(mapVal.size)
//
// // ================================
//
// // for (let [key,value] of mapVal){
// //     console.log(key, value )
// // }
//
// // for (let val  of mapVal.values()){
// //     console.log(val)
// // }
//
// // for (let key  of mapVal.keys()){
// //     console.log(key)
// // }
//
// // mapVal.forEach((val,key,map)=>{
// //     console.log(val,key)
// // })
//
// //=========================================
//
// // const array = [...mapVal]
// // const array = Array.from(mapVal)
// // console.log(array)
// // const mapValObj = Object.fromEntries(mapVal.entries())
// // console.log(mapValObj)
//
// //==========================================
//
// const users =[
//     {name:'Elena'},
//     {name:'Alex'},
//     {name:'Irina'}
// ]
//
// const visits = new Map()
//
// visits
//     .set(users[0], new Date())
//     .set(users[1], new Date(new Date().getTime() + 1000*60))
//     .set(users[3], new Date(new Date().getTime() + 5000*60))
//
// function lastVisite(user) {
//     return visits.get(user)
// }
//
// console.log(lastVisite(users[3]))

// //SET ================================================
//
// //значениями могуть быть строки, числа объекты массивы
// const set = new Set([1,2,3,3,4,5,5,6])
//
// //console.log(set) //Set { 1, 2, 3, 4, 5, 6 } нет дубликатов
//
// set.add(10).add(20).add(30).add(20)
// //
// // console.log(set)
// // console.log(set.has(42)) //true or false
// // console.log(set.size)
// // console.log(set.delete(1))
// // console.log(set.size)
// // set.clear()
// // console.log(set.size)
//
// // console.log(set.values())
// // console.log(set.keys())
// // console.log(set.entries())
//
// // for (let key of set){
// //     console.log(key)
// // }
//
// // SET примеры ============================
//
// function uniqValue(array) {
//     // return [...new Set(array)]
//     return Array.from(new Set(array))
// }
//
// console.log(uniqValue([1,1,2,2,4,4,4,4,4,5,6,6,6]))

// // WeakMAP ==========================================
// //
// // weakMap позволяет избежать утечек данных в js
// // В weakMap ключами могут являтся только объекты
// // У weakMap есть методы get, set, delete, has
//
// let obj = {name:'WeakMap'}
//
// // const arr = [obj]
// // obj = null
// // console.log(arr[0])
//
// const mapWeak = new WeakMap([
//     [obj, 'obj data']
// ])
// obj = null
// //console.log(mapWeak.has(obj))
// // console.log(mapWeak)
//
// // примеры WeakMap========================================
//
// const cache = new WeakMap()
//
// function cacheUser(user) {
//     if (!cache.has(user)){
//         cache.set(user, Date.now())
//     }
//     return cache.get(user)
// }
//
// let lena = {name:'Elena'}
// let alex = {name:'Alex'}
//
// cacheUser(lena)
// cacheUser(alex)
//
// lena = null // удалил пользователя,автоматически был удалён объект и память была очищена
//             // в переменной cache не хранится ничего лишнего и
//             // приложение работает быстрее
//
// console.log(cache.has(lena))//false
// console.log(cache.has(alex))

// // WeakSet ============================================
// //
// const users = [
//     {name:'Vlad'},
//     {name:'Alex'},
//     {name:'Irina'},
// ]
//
// const visits = new WeakSet()
//
// visits.add(users[0]).add(users[1])
//
// users.splice(1,1)
//
// console.log(visits.has(users[0]))
// console.log(visits.has(users[1]))