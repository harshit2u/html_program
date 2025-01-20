const Person={
    name: "Harshit Upadhyay",
    age: 21,
    email: "uharshit580@gmail.com"
}
console.log(Person.name+" "+Person.age+" "+Person.email);//st1
//Ading Object destructure
const{name,age,email}=Person
console.log(name+" "+age+" "+email);//st2