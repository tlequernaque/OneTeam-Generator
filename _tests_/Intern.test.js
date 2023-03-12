const Intern = require('../lib/Intern')

test("testing for name property", function(){
    const testValue = "john";
    const newEmployee = new Employee(testValue, "", "","");
    expect(newEmployee.name).toBe(testValue);
})

test("testing for ID property", function(){
    const testValue = "7";
    const newEmployee = new Employee("", testValue, "","");
    expect(newEmployee.id).toBe(testValue);
})

test("testing for email property", function(){
    const testValue = "john@yahoo.com";
    const newEmployee = new Employee("", "", testValue,"");
    expect(newEmployee.email).toBe(testValue);
})

test("testing for GitHub property", function(){
    const testValue = "GaTech";
    const newEmployee = new Employee("", "","",testValue);
    expect(newEmployee.school).toBe(testValue);
})