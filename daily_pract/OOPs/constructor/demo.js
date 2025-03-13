//deafult const
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

//paratmerised const
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

//copy const
// class Person {
//     constructor(name, age) {
//         this.name = name;
//         this.age = age;
//     }

//     copy() {
//         return new Person(this.name, this.age);
//     }
// }

// let obj1 = new Person("Jhon", 40);
// let obj2 = obj1.copy();
// console.log(obj2.name); 

//static const
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    static createDefault() {
        return new Person("Default", 18);
    }
}

let obj = Person.createDefault();
console.log(obj.name); 
