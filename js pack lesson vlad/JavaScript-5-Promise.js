console.log('Request Data...')

/*
setTimeout(()=>{
    console.log('Preparing data...')
    const backendData ={
        server: 'aws',
        port: 2000,
        status: 'working'
    }

    setTimeout(()=>{
        backendData.modified = true
        console.log('Data received', backendData)
    },2000)
},2000)
*/

/* resolve,reject (разрешить, отклонить) - параметры, которые являются функциями
*  resolve вызывается, когда асинхронная операция заканчивается успешно
* */
// const p = new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         console.log('Preparing data...')
//         const backendData ={
//             server: 'aws',
//             port: 2000,
//             status: 'working'
//         }
//         resolve(backendData)//показывает Promise, что он завершил свое выполнение и передаем полученные данные
//     },2000)
// })
//
// //then - когда выполнится промис
// p.then( data=>{
//     return  new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             data.modified = true
//             //убрать или добавить, чтобы посмотреть ошибку
//             //reject(data)
//             resolve(data)
//
//         },2000)
//     })
//
// })
//     .then(clientData=>{
//     console.log('Data received', clientData)
//     clientData.fromPromise = true
//     return clientData
// })
//     .then(data2=>{
//     console.log('Modified', data2)
// })
//     .catch(err => console.error('ERROR: ',err))
//     .finally(()=> console.log('Finally'))

//////========================================

const sleep = ms => {
    return new Promise( resolve => {
        setTimeout(()=> resolve(),ms)
    })
}

// sleep(2000).then(()=> console.log('After 2 sec'))
// sleep(3000).then(()=> console.log('After 3 sec'))


//// .all принимает пассив Промисов, и ждет выполнения ВСЕХ промисов, и он return тип ПРОМИС и на него
//// можно вешать все те же методы что и раньше
Promise.all([sleep(2000),sleep(5000)])
    .then(()=>{
        console.log('ALL promises')
    })
// .race тоже что и .all только выполняет, когда завершится любой из перечисленных промисов
Promise.race([sleep(2000),sleep(5000)])
    .then(()=>{
        console.log('Race promises')
    })

// /*
// * Промис обёртка над асинхронностью, добавляет удобство для написания кода
// * */