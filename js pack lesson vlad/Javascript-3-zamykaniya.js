function createCalcFunction(n) {
    return function () {
        console.log(1000*n)
    }
}

const calc = createCalcFunction(42)
calc()
//=========================================
function createIncrementor(n){
    return function (num) {
        return n + num
    }
}

const addOne = createIncrementor(1)
const addTen = createIncrementor(10)

console.log(addOne(10))
console.log(addOne(41))

console.log(addTen(10))
console.log(addTen(41))
//=============================================
function urlGenerator(domain) {
    return function (url) {
        return `https://${url}.${domain}`
    }
}

const comUrl = urlGenerator('com')
const ruUrl = urlGenerator('ru')

console.log(comUrl('google'))
console.log(comUrl('netflix'))

console.log(ruUrl('yandex'))
console.log(ruUrl('vkontakte'))
console.log(comUrl('vkontakte'))
//==============================================

function bind(context, fn) {
    return function () {
        fn.apply(context)
    }
}

function logPerson() {
    console.log(`Person: ${this.name}. Age: ${this.age}`)
}

const person1 = {name:'Vlad', age:25,job: 'frontend'}
const person2 = {name:'Lena', age:23,job: 'SMM'}

bind(person1, logPerson)()
bind(person2, logPerson)()

logPerson.apply(person1)
logPerson.apply(person2)
