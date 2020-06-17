export default  class User{
    constructor(name, age) {
        this.name = name
        this.age = age
    }
}

export function printName(user) {
    console.log(`User name: ${user.name}`)
}
export function printAge(user) {
    console.log(`User age: ${user.age}`)
}

// аналогично тому что выше
// export default User
// export {printName,printAge}