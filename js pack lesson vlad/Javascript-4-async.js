//http://latentflip.com/loupe/
console.log('start')
console.log('start 2')

// function timeout2sec(){
//     console.log('timeout 2 second')
// }
// setTimeout(timeout2sec, 2000)

setTimeout(function(){
    console.log('start 5 inside time out 5s')
}, 5000)

setTimeout(function(){
    console.log('start 5 inside time out 0s')
}, 0)
// Все равно будет после всех других функций,
// потому что все равно попадает в очередь
// мы работает в одном пот оке в браузере
// Мы работает в eventLoope (hover, click, dbclick)
// Важный концепт для Node.js

console.log('end')


