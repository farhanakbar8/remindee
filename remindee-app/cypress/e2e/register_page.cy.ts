describe("Registering", () => {
  beforeEach(() => {
    cy.request("POST", "http://localhost:3000/api/authentication/register", {
      email: "test@mail.com",
      password: "12345",
      name: "mail",
    });
  });

  it("it should visit", () => {
    cy.visit("http://localhost:3000/signup");
  });

  after(() => {
    it("it should visit", () => {
      cy.visit("http://localhost:3000/login");
    });
  });
});
