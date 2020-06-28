//////////Уникальный массив
const numbers = [1, 2, 1, 1, 2, 1, 3, 4, 1 ]
const uniq = [...new Set(numbers)] // => [ 1, 2, 3, 4 ]
const uniq2 = Array.from(new Set(numbers)) // => [ 1, 2, 3, 4 ]

/////////Обновление объекта в массиве по свойству
const initial = [ {id: 1, score: 1}, {id: 2, score: 2}, {id: 3, score: 4}]
const newValue = {id: 3, score: 3}
const updated = initial.map(x => x.id === newValue.id ? newValue : x)
//console.log(updated) // => [ { id: 1, score: 1  }, { id: 2, score: 2  }, { id: 3, score: 3  }  ]

//////////Удаление объекта из массива по свойству
const removeId = 3
const without3 = initial.filter(x => x.id !== removeId)
//console.log(without3) // => [ { id: 1, score: 1  }, { id: 2, score: 2  }  ]

//////////Удаления ключа из объекта с помощью деструктуризацтии
const removekey = {
    foo:'bar',
    useful:1,
    useless:2,
}
const {useless, ...clean} = removekey
//console.log(clean)

///////Объединяем массив объектов в объект  вместе с reduce и spread
const data = [ {a: 1}, {b: 2}, {c: 3} ]
const merged = data.reduce((res, obj) => ({...res, ...obj}), {})
//console.log(merged) // => { a: 1, b: 2, c: 3  }

// объединяем массив объектов по свойству
const toMerge = [
    { id: 1, value: 'a', },
    { id: 2, value: 'b', },
    { id: 3, value: 'c' },
    { id: 1, score: 1 },
    { id: 2, score: '2' },
]
const mergedByProperty = toMerge.reduce((result, obj) => ({
    ...result,
    [obj.id]: {
        ...result[obj.id],
        ...obj
    }
}), {})
//console.log(mergedByProperty) // =>
/*
 *{ '1': { id: 1, value: 'a', score: 1 },
 *  '2': { id: 2, value: 'b', score: '2' },
 *  '3': { id: 3, value: 'c' } }
 */

////////// объединить два массива объектов, используя оператор spread

const ids =[1,2,3]
const a1 = [{_id:1,something:1},{_id:2,something:2}]
const a2 = [{_id:1,else:'foo'},{_id:3,else:'foobar'},{_id:2,else:'bar'}]

const all = ids.map(id=>{
    return {
        ...a1.filter(x => x._id === id)[0],
        ...a2.filter(x => x._id === id)[0]
    }
})
//console.log(all)

///////Flatten
/////// Преобразование многомерного массива в одномерный:
const arrayOfArray = [ [1, 2], [3, 4], [[5, 6]] ]
const flattened = arrayOfArray.reduce((res, a) => [...res, ...a], [] )
//console.log(flattened) // => [1, 2, 3, 4, [5, 6]]


/////// fromPairs Преобразование массива в объект из пар ключ-значение
const pairs = [['a', 1], ['b', 2], ['c', 3]]
const asObjects = pairs
    .reduce((res, [key, value]) => ({ ...res, [key]: value }), {})
/////// или так
const asObjects2 = { ...(new Map(pairs)) }
//console.log(asObjects) // => { a: 1, b: 2, c: 3  }



////////Вычитание из наборов
/////// Удаление повторяющихся элементов из двух наборов (массивов)
const s1 = [ 1, 2, 3, 4, 5 ]
const s2 = [ 2, 4 ]
const subtracted = s1.filter(x => s2.indexOf(x) < 0)
console.log(subtracted)