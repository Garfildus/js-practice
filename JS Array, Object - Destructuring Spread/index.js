console.group('\n\n1. Start arrays: alphabet,numbers')
const alphabet = ['A','B','C','D','E','F',]
const numbers = ['1','2','3','4','5','6']
console.log('alphabet:',alphabet)
console.log('numbers:',numbers)
console.groupEnd()

console.group('\n\n2. Destructuring alphabet')
const a1 = alphabet[0]
const b1 = alphabet[1]
const [a2,b2] = alphabet
console.log(`[a2,b2] = alphabet; a2: ${a2}, b2: ${b2}`)
console.groupEnd()

console.group('\n\n3. Spread operator alphabet')
const [a3,,c3, ...rest3] = alphabet
console.log(`[a3,,c3, ...rest3] = alphabet; c3: ${c3}, rest3: ${rest3}`)
console.groupEnd()

console.group('\n\n4. Spread operator like a .concat')
const newArray1 = alphabet.concat(numbers)
const newArray2 = [...alphabet, ...numbers]
console.log('newArray1 = alphabet.concat(numbers);\n newArray1:',newArray1)
console.log('newArray2 = [...alphabet, ...numbers];\n newArray2:',newArray2)
console.groupEnd()

console.group('\n\n5. Spread operator like a .concat')
function sumAndMultiply(a,b) {
    return [a+b, a*b]
}
console.log('sumAndMultiply(a,b) return [a+b, a*b]')
console.log('sumAndMultiply(3,4):',sumAndMultiply(3,4))

const [sum, multiply,division = 'No division'] = sumAndMultiply(3,4) // Установка значения по умолчанию
console.log('[sum, multiply,division = \'No division\'] = [7,12]')
console.log(` sum: ${sum}\n multiply:${multiply}\n division:${division}`)
console.groupEnd()

console.group('\n\n6. Template use for Destructuring, Spread on Objects ')
const personOne1 ={
    name:'Vlad',
    age: 25,
    favoriteFood:'Rise',
    address:{
        city:'Moscow',
        country:'Russia'
    }
}
const personTwo1 ={
    name:'Yuri',
    age: 27,
    address:{
        city:'Arenwood',
        country:'Fantasy'
    }
}
const {name:firstName2, ...rest} = personTwo1
console.log(`{name:firstName2, ...rest} = personTwo1;\n firstName2:${firstName2}, rest:${rest}`)

const {name:firstName = 'No Name', age, favoriteFood = 'Meat', address:{city, country}} = personOne1
console.log('{name:firstName = \'No Name\', age, favoriteFood = \'Meat\', address:{city, country}} = personOne1')
console.log(`firstName:${firstName}\t age:${age}\t favoriteFood:${favoriteFood}\t city:${city}\t country:${country}`)
console.groupEnd()


console.group('\n\n7. Template use for Destructuring, Spread on Object')
const personOne2 ={
    name:'Vlad',
    age: 25,
    address:{
        city:'Moscow',
        country:'Russia'
    }
}
const personTwo2 ={
    age: 27,
    favoriteFood:'Banana',
}
console.log(`personOne2:${JSON.stringify(personOne2)}, personTwo2:${JSON.stringify(personTwo2)}`)

const personThree2 = {...personOne2,...personTwo2}
console.log('personThree2 = {...personOne2,...personTwo2}; personThree2=',personThree2)
console.groupEnd()


console.group('\n\n8. Template use for Destructuring, Spread on Object')
const personOne ={
    name:'Vlad',
    age: 25,
    //favoriteFood:'Meet',
    address:{
        city:'Moscow',
        country:'Russia'
    }
}
function printUser1(user) {
    console.group('printUser1')
    console.log('printUser1(user)=>')
    console.log('{ Name is ${user.name}. Age is ${user.age}  }\n\n')
    console.log(`Name is ${user.name}. Age is ${user.age}`)
    console.groupEnd()
}
function printUser2({name, age, favoriteFood = 'Watermelon'}) {
    console.group('printUser2')
    console.log('printUser2({name, age, favoriteFood = \'Watermelon\'}) =>')
    console.log('{ Name is ${name}. Age is ${age}. Favorite food is ${favoriteFood} }\n\n')
    console.log(`Name is ${name}. Age is ${age}. Favorite food is ${favoriteFood}`)
    console.groupEnd()
}
printUser1(personOne)
printUser2(personOne)
console.groupEnd()
