class Employee{
    constructor(){
        this.id=101;
        this.empName="Harshit";
    }
    displayInfo(){
        console.log(this.id+" "+this.empName);
    }
}
let emp=new Employee();
emp.displayInfo();