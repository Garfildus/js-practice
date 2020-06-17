// // // const animal = {
// // //     name: 'Animal',
// // //     age: 5,
// // //     hasTail:true
// // // }
// //
// // class Animal {
// //     static type ='ANIMAL'
// //
// //     constructor(option) {
// //         this.name = option.name
// //         this.age = option.age
// //         this.hasTail = option.hasTail
// //     }
// //
// //     voice(){
// //         console.log('I am ANIMAL!!')
// //     }
// // }
// //
// // // const animal = new Animal({
// // //     name: 'Animal',
// // //     age: 5,
// // //     hasTail:true
// // // })
// //
// // class Cat extends Animal {
// //     static type = 'CAT'
// //
// //     constructor(option) {
// //         super(option);
// //         this.color = option.color
// //     }
// //
// //     voice() {
// //         super.voice();
// //         console.log("I am CAT")
// //     }
// //
// //     get ageInfo(){
// //         return this.age*7
// //     }
// //
// //     set ageInfo(newAge){
// //         this.age = newAge
// //     }
// // }
// //
// // const cat = new Cat({
// //     name: 'Cat',
// //     age: 7,
// //     hasTail:true,
// //     color: 'black'
// // })
//
// class Component {
//     constructor(selector) {
//         this.$el = document.querySelector(selector)
//     }
//
//     hide(){
//         this.$el.style.display ='none'
//     }
//     show(){
//         this.$el.style.display ='block'
//     }
// }
//
// class Box extends Component{
//     constructor(options) {
//         super(options.selector)
//
//         this.$el.style.width = this.$el.style.height = options.size + 'px'
//         this.$el.style.background = options.background
//     }
// }
//
// const box1 = new Box({
//     selector:'#box1',
//     size:100,
//     background:'red'
// })
//
// const box2 = new Box({
//     selector:'#box2',
//     size:150,
//     background:'blue'
// })
//
// class Circle extends Box {
//     constructor(options) {
//         super(options);
//
//         this.$el.style.borderRadius = '50%'
//     }
// }
//
// const circle = new Circle({
//     selector:'#circle',
//     size:90,
//     background:'green'
// })