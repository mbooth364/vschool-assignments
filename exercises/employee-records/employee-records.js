var employees = [];

function Employee(name, title, salary, status) {
    this.name = name;
    this.title = title;
    this.salary = salary;
    this.status = "full time";

    this.printEmployeeForm = function () {
        console.log("name: " + this.name + " job title: " + this.title + " salary: " + this.salary + " Status: " + this.status);
    };
}
var mike = new Employee("mike Booth", "owner", 1000);
var sarah = new Employee("sarah payne", "manager", 1000);
var caleb = new Employee("caleb booth", "cook", 800);
var aubrey = new Employee("aubrey payne", "cook", 800);
   console.log(aubrey.name);
aubrey.status = "part time";
employees.push(mike, sarah, aubrey, caleb);


console.log(mike.name);
mike.printEmployeeForm();
sarah.printEmployeeForm();
caleb.printEmployeeForm();
aubrey.printEmployeeForm();
console.log(employees);