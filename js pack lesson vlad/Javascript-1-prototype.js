const person_1 = {
    name: 'Vlad',
    age: 25,
    greet: ()=>{
        console.log('Greet!')
    },
}
const person_2 = new Object({
    name: 'Vlad',
    age: 25,
    greet: function (){
        console.log('Greet!')
    }
})
Object.prototype.sayHello = function(){
   console.log('Hello!')
}
/*prototype - объект что присутствует у родительских элементов
* и иметь доступ к более расширенным функциям.
* Это объект который присутствует у объектов, и он вызывается по цепочки сверху вниз.
*
* Объект с помощью которого мы расшираем свойсво объектов или классов,
*  можем создавать наследования внутри Javascript'а
* */
const lena = Object.create(person_1_2)
lena.name = 'Lena'
const str = new String('i am string')
