class Person {
    constructor(){
        this.name = "johnny cage";
        this.age = 33;
    }
    getName(){
        return this.name;
    }

    setAge(age){
         this.age = age;
    }

    getAge(){
        return this.age;
    }
}
var person = new Person();
person.setAge(34);
console.log('Name:' + person.getName());
console.log('Age:' + person.getAge());

class Person1{
    constructor(){
        this.name1 = 'simon stone';
        this.age1 = 50;
    }
    getName1(){
        return this.name1
    }
    getAge1(){
        return this.age1
    }
}

class Student extends Person {
    constructor(name1,age1,studentId){
        super(name1,age1);
        this.studentId='sv001';
    }
    getStudentInfo(){
        return "Name " + this.getName()+ "--Tuoi "+ this.getAge()+ "--Ma SV: "+ this.studentId;
    }
}
var student = new Student();
console.log(student.getStudentInfo());