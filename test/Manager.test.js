const Manager = require("../lib/Manager");

describe("Create Manager Object", () => {
    const testMan = new Manager("Hailey", "0", "hfran7@yahoo.com","424");
    describe("get Manager Name", () => {
      it("should return the name of the initialized Manager", () => {
        const nameCompare = "Hailey";
        expect(testMan.getName()).toEqual(nameCompare);
      });
    });
    describe("get Manager ID", () => {
      it("should return the ID of the initialized Manager", () => {
          const IDCompare = "0";
          expect(testMan.getId()).toEqual(IDCompare);
      });
    });
    describe("get Manager Email", () => {
      it("should return the Email of the initialized Manager", () => {
          const emailCompare = "hfran7@yahoo.com";
          expect(testMan.getEmail()).toEqual(emailCompare);
      });
    });
    describe("get Manager Role", () => {
      it("should return \"Manager\" for the role of the initialized Manager", () => {
          const roleCompare = "Manager";
          expect(testMan.getRole()).toEqual(roleCompare);
      });
    });
    describe("get Manager Office Number", () => {
      it("should return the office number of the initialized Manager", () => {
          const offNumCompare = "424";
          expect(testMan.getOfficeNumber()).toEqual(offNumCompare);
      });
    });
  });