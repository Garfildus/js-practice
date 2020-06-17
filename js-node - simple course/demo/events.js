const EventsEmitter = require('events')

// const emitter = new EventsEmitter()
//
// emitter.on('anything', (data)=>{
//     console.log('ON:anything', data)
// })
//
// emitter.emit('anything', {a:1})
//
// emitter.emit('anything', {b:2})
//
// setTimeout(()=>{
//     emitter.emit('anything', {c:3})
// }, 1000)

class Dispatcher extends EventsEmitter{
    subscribe(eventName, cb){
        console.log('[Subcribe...]')
        this.on(eventName,cb)
    }

    dispath(eventName, data){
        console.log('[Dispatching...]')
        this.emit(eventName, data)
    }
}

const dis = new Dispatcher()

dis.subscribe('aa', (data)=>{
    console.log('ON: aa', data)
})

dis.dispath('aa', {aa:22})
