const Intern = require("../lib/Intern");

describe("Create Intern Object", () => {
    const testInt = new Intern("Mabel", "3", "MabelNeve@gmail.com","University of North Florida");
    it("should return the name of the initialized Intern", () => {
      const nameCompare = "Mabel";
      expect(testInt.getName()).toEqual(nameCompare);
    });
    it("should return the ID of the initialized Intern", () => {
        const IDCompare = "3";
        expect(testInt.getId()).toEqual(IDCompare);
      });
    it("should return the Email of the initialized Intern", () => {
        const emailCompare = "MabelNeve@gmail.com";
        expect(testInt.getEmail()).toEqual(emailCompare);
    });
    it("should return \"Intern\" for the role of the initialized Intern", () => {
        const roleCompare = "Intern";
        expect(testInt.getRole()).toEqual(roleCompare);
    });
    it("should return the school of the initialized Intern", () => {
        const schoolCompare = "University of North Florida";
        expect(testInt.getSchool()).toEqual(schoolCompare);
    });
  });