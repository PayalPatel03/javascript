//DEFAULT COMSTRUCTOR
// class Demo{
//     constructor(){
//         console.log("This is from constructor.");
//     }
//     print(){
//         console.log("This is from Demo.");
//     }
// }
// let obj=new Demo();
// obj.print();

//PATAMERTISED CONSTRUCTOR
// class Demo{
//     constructor(shape,color){
//         this.shape=shape;
//         this.color=this.color;
//     }
//     set(shape,color){
//         this.shape=shape;
//         this.color=this.color;
//     }
//     get(){
//         console.log("Shape: "+this.shape);
//         console.log("Colour: "+this.color);
//     }
// }
// let obj=new Demo("circle","Purple");
// obj.get();

//COPY CONSTUCCTOR
// class Info {
//     constructor(name, age) {
//         this.name = name;
//         this.age = age;
//     }
//     copy() {
//         return new Info(this.name, this.age);
//     }
// }

// let obj1 = new Info("Jinal", 27);
// let obj2 = obj1.copy();
// console.log(obj2.name); 
// console.log(obj2.age); 

//STATIC COSTRUCTOR
// class Data {
//     constructor(name, age) {
//         this.name = name;
//         this.age = age;
//     }

//     static Default() {
//         return new Data("Default", 18);
//     }
// }

// let obj = Data.Default();
// console.log(obj.name);
// console.log(obj.age);