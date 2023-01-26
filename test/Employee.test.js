const Employee = require("../lib/Employee");

describe("Create Employee Object", () => {
    const testEmp = new Employee("Jennifer", "1", "jenLovesBen@gmail.com");
    it("should return the name of the initialized Employee", () => {
      const nameCompare = "Jennifer";
      expect(testEmp.getName()).toEqual(nameCompare);
    });
    it("should return the ID of the initialized Employee", () => {
        const IDCompare = "1";
        expect(testEmp.getId()).toEqual(IDCompare);
      });
    it("should return the Email of the initialized Employee", () => {
        const emailCompare = "jenLovesBen@gmail.com";
        expect(testEmp.getEmail()).toEqual(emailCompare);
    });
    it("should return \"Employee\" for the role of the initialized Employee", () => {
        const roleCompare = "Employee";
        expect(testEmp.getRole()).toEqual(roleCompare);
    });
  });