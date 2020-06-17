function hello() {
    console.log('Hello', this)
}

//hello()  === window.hello()  this = window

const person = {
    name: 'Vlad',
    age: '25',
    sayHello: hello,
    // sayHelloWindow: hello.bind(window),
    sayHelloWindow: hello.bind(this),
    //sayHelloWindow: hello.bind(document),
    logInfo: function (job, phone) {
        console.group(`${this.name} info:`)
        console.log(`Name is ${this.name}`)
        console.log(`Age is ${this.age}`)
        console.log(`Job is ${job}`)
        console.log(`Phone is ${phone}`)
        console.groupEnd()
    }
}
// window === this
//person.hello()  this = person{}

const lena = {
    name: 'Elena',
    age: '23',
}

// person.logInfo.bind(lena)()

// const fnLenaInfoLog = person.logInfo.bind(lena)
// fnLenaInfoLog('Frontend','850598654')

// const fnLenaInfoLog = person.logInfo.bind(lena, 'Frontend','850598654')
// fnLenaInfoLog()

person.logInfo.bind(lena, 'Frontend','850598654')() // нужно указать () чтобы вызвать
person.logInfo.call(lena, 'Frontend','850598654') // вызывает сразу функцию

person.logInfo.apply(lena, ['Frontend','850598654'])

///============================================

const array = [1,2,3,4,5]

// function multBy(arr, n) {
//     return arr.map(function (i) {
//         return i * n
//     })
// }
//console.log(multBy(array, 5))

//чтобы изменять элементы новых массивов не нужно вызывать отдельную функцию
Array.prototype.multBy = function(n){
        return this.map(function (i) {
        return i * n
    })
}

console.log(array.multBy(5))
