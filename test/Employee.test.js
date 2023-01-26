const Employee = require("../lib/Employee");

describe("Create Employee Object", () => {
    const testEmp = new Employee("Jennifer", "1", "jenLovesBen@gmail.com");
    describe("Get Employee Name", () => {
      it("should return the name of the initialized Employee", () => {
        const nameCompare = "Jennifer";
        expect(testEmp.getName()).toEqual(nameCompare);
      });
    });
    describe("get Employee ID", () => {
      it("should return the ID of the initialized Employee", () => {
          const IDCompare = "1";
          expect(testEmp.getId()).toEqual(IDCompare);
        });
    });
    describe("get Employee Email", () => {
      it("should return the Email of the initialized Employee", () => {
          const emailCompare = "jenLovesBen@gmail.com";
          expect(testEmp.getEmail()).toEqual(emailCompare);
      });
    });
    describe("get Employee Role", () => {
      it("should return \"Employee\" for the role of the initialized Employee", () => {
          const roleCompare = "Employee";
          expect(testEmp.getRole()).toEqual(roleCompare);
      });
    })
  });