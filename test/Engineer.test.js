const Engineer = require("../lib/Engineer");

describe("Create Engineer Object", () => {
    const testEng = new Engineer("Benjamin", "2", "benLovesJen@gmail.com","github");
    describe("get Engineer name", () =>{
      it("should return the name of the initialized Engineer", () => {
        const nameCompare = "Benjamin";
        expect(testEng.getName()).toEqual(nameCompare);
      });
    });
    describe("get Engineer ID", () => {
      it("should return the ID of the initialized Engineer", () => {
          const IDCompare = "2";
          expect(testEng.getId()).toEqual(IDCompare);
      });
    });
    describe("get Engineer Email", () => {
      it("should return the Email of the initialized Engineer", () => {
          const emailCompare = "benLovesJen@gmail.com";
          expect(testEng.getEmail()).toEqual(emailCompare);
      });
    });
    describe("get Engineer Role", () => {
      it("should return \"Engineer\" for the role of the initialized Engineer", () => {
          const roleCompare = "Engineer";
          expect(testEng.getRole()).toEqual(roleCompare);
      });
    });
    describe("get Engineer github username", () => {
      it("should return the github username of the initialized Engineer", () => {
          const githubCompare = "github";
          expect(testEng.getGithub()).toEqual(githubCompare);
      });
    });
  });