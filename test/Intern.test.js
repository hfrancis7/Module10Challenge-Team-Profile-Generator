const Intern = require("../lib/Intern");

describe("Create Intern Object", () => {
    const testInt = new Intern("Mabel", "3", "MabelNeve@gmail.com","University of North Florida");
    describe("get Intern name", () => {
      it("should return the name of the initialized Intern", () => {
        const nameCompare = "Mabel";
        expect(testInt.getName()).toEqual(nameCompare);
      });
    });
    describe("get Intern ID", () => {
      it("should return the ID of the initialized Intern", () => {
          const IDCompare = "3";
          expect(testInt.getId()).toEqual(IDCompare);
      });
    });
    describe("get Intern Email", () => {
      it("should return the Email of the initialized Intern", () => {
          const emailCompare = "MabelNeve@gmail.com";
          expect(testInt.getEmail()).toEqual(emailCompare);
      });
    });
    describe("get Intern Role", () => {
      it("should return \"Intern\" for the role of the initialized Intern", () => {
          const roleCompare = "Intern";
          expect(testInt.getRole()).toEqual(roleCompare);
      });
    });
    describe("get Intern School", () => {
      it("should return the school of the initialized Intern", () => {
          const schoolCompare = "University of North Florida";
          expect(testInt.getSchool()).toEqual(schoolCompare);
      });
    });
  });