import U, {printAge, printName as userName} from './user.js'

const user = new U('Васян', 11)
console.log(user)
userName(user)
printAge(user)