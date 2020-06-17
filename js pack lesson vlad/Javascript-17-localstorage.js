const myNumber = 42

// localStorage.removeItem('number')
// console.log(localStorage.getItem('number'))
// // setItem('ключ','значение тип String')
// localStorage.setItem('number', myNumber.toString())
// console.log(localStorage.getItem('number'))
// localStorage.clear()

const object = {
    name:'Vladimir',
    age:26
}

localStorage.setItem('persons',JSON.stringify(object))
const raw = localStorage.getItem('persons')
const localObj = JSON.parse(raw)
localObj.name = 'DRUGOE IMYA'
//
// console.log(localObj)

////===========
window.addEventListener('storage', event =>{
    console.log('событие',event)
})

/* Чем отличается localStorage от Cooke
*   В основном local больше по объему чем cooke,
*   local может быть миниум 5мб, у cooke ~4кб
*   cooke отпровляется на сервер
*
* */



