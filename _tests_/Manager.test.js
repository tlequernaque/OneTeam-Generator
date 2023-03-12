const Manager = require('../lib/Manager');

test("testing for name property", function(){
    const testValue = "john";
    const newEmployee = new Manager(testValue, "", "","");
    expect(newEmployee.name).toBe(testValue);
});

test("testing for ID property", function(){
    const testValue = "7";
    const newEmployee = new Manager("", testValue, "","");
    expect(newEmployee.id).toBe(testValue);
});

test("testing for email property", function(){
    const testValue = "john@yahoo.com";
    const newEmployee = new Manager("", "", testValue,"");
    expect(newEmployee.email).toBe(testValue);
});

test("testing for office number property", function(){
    const testValue = "4";
    const newEmployee = new Manager("", "","",testValue);
    expect(newEmployee.officeNumber).toBe(testValue);
});