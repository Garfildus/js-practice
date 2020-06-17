const items = [
    {name:'Bike',       price: 100  },
    {name:'Tv',         price: 200  },
    {name:'Album',      price: 10   },
    {name:'Book',       price: 5    },
    {name:'Phone',      price: 500  },
    {name:'Computer',   price: 1000 },
    {name:'Keyboard',   price: 25   },
]
console.log('0. Сам массив:',items)


const filteredItems = items.filter((item)=>{
    return item.price <= 100
})
console.log('1. filter price <= 100:',filteredItems)


const itemsName = items.map((item)=>{
    return item.name
})
console.log('2. map .name:',itemsName)


const findItem = items.find((item)=>{
    return item.name === 'Album'
})
console.log('3. find name === \'Album\':',findItem)


console.group('4. forEach Name:{name} price:{price}')
items.forEach((item)=>{
    console.log(`Name:${item.name} price:${item.price}`)
})
console.groupEnd()


const hasInexpensiveItemsSome = items.some((item)=>{
    return item.price <= 100
})
console.log('5. some price <= 100:',hasInexpensiveItemsSome)


const hasInexpensiveItemsEvery = items.every((item)=>{
    //return item.price <=500 //false
    return item.price <= 1000 //true every <=1000
})
console.log('6. every price <= 1000:',hasInexpensiveItemsEvery)


const total = items.reduce( (currentTotal, item)=>{
    return item.price + currentTotal
}, 0)
console.log('7. reduce [return item.price + currentTotal]:',total)


let num = [1,2,3,4,5,6,7]
let string = ['vlad', 'Vlad', 'vasya', 'Yuri']
const includesNum = num.includes(10)
const includesString = string.includes('Vlad');
console.group('8. includes')
console.log('Цифры:',num)
console.log('Строки:',string)
console.log('.includes(10) цифры:',includesNum)
console.log('.includes(\'Vlad\') строки:',includesString)
console.groupEnd()
