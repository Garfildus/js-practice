// // const requestUrl = 'https://jsonplaceholder.typicode.com/users'
// //
// // //Отправляем запросы без библиотек, базовым XMLHttpRequest
// //
// // function sendRequest(method,url,body) {
// //     return new Promise((resolve, reject)=>{
// //         const xhr = new XMLHttpRequest()
// //         //открываем соединение и передаем метод (GET, POST, DELETE, PUT, PATCH ...)
// //         xhr.open(method,url)
// //
// //         // xhr.response ответ всегда приходит в виде stirng
// //         xhr.responseType = 'json' //2 способ парса строки в json. Есть и другие Type
// //         //устанавливаем header, которые отправит с запросом
// //         xhr.setRequestHeader('Content-Type','application/json')
// //
// //         xhr.onload = ()=>{
// //             // console.log(JSON.parse(xhr.response)) //1 способ парса строки в json
// //             if(xhr.status >= 400){ //все что выше 399 это статусы ошибок 404 401
// //                 reject(xhr.response)
// //             }else{
// //                 resolve(xhr.response)
// //             }
// //         }
// //
// //         // Обработка ошибок у объекта xhr есть функция
// //         // Есть ситуации когда сервер отвечает как бы без ошибки,
// //         // но при этом будет нести код и ответ ошибки
// //         // чтобы избежать нужно обрабатывать XHR.status в onload (if в onload)
// //         xhr.onerror = ()=>{
// //             reject(xhr.response)
// //         }
// //
// //         //отправляем данные по url
// //         xhr.send(JSON.stringify(body))
// //     })
// // }
// //
// // // sendRequest('GET',requestUrl)
// // //     .then(data=> console.log(data))
// // //     .catch(err=>console.log(err))
// // const body = {
// //     name:'Vladimir',
// //     age:26
// // }
// // sendRequest('POST',requestUrl,body)
// //     .then(data=> console.log(data))
// //     .catch(err=>console.log(err))
// //////// FETCH==================================================================
// const requestUrl = 'https://jsonplaceholder.typicode.com/users'
// //fetch() возвращает Promise
// function sendRequest(method,url,body = null) {
//     const headers = {
//         'Content-Type': 'application/json'
//     }
//     return fetch(url, {
//         method:method,
//         body: JSON.stringify(body),
//         headers: headers,
//         mode: 'cors',
//     }).then(response =>{
//         //response.text() возвращает string
//         if(response.status <400){
//             return response.json()
//         }
//
//         return response.json().then(err =>{
//             const e = new Error('Что-то пошло не так')//Создание ошибки для теста
//             e.data = error
//             throw e
//         })
//     })
// }
//
// // sendRequest('GET',requestUrl)
// //     .then(data=> console.log(data))
// //     .catch(err=>console.log(err))
//
// const body = {
//     name:'Vladimir',
//     age:26
// }
// sendRequest('POST',requestUrl,body)
//     .then(data=> console.log(data))
//     .catch(err=>console.log(err))
//
