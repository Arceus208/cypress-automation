import HomePage_PO from "../../support/pageObjects/webdriver-uni/Homepage_PO";
import Contact_Us_PO from "../../support/pageObjects/webdriver-uni/Contact_us_PO";

describe("Test Contact Us form via WebdriverUni", () => {
  const homepage_PO = new HomePage_PO();
  const contact_Us_PO = new Contact_Us_PO();

  before(function () {
    cy.fixture("example").then(function (data) {
      globalThis.data = data;
    });
  });

  beforeEach(() => {
    homepage_PO.visitHomepage();
    homepage_PO.clickOn_ContactUs_Button();
    /* cy.pause(); */
  });

  it("Should be able to submit a successfull submission via contact us form", function () {
    cy.document().should("have.property", "charset").and("eq", "UTF-8");
    cy.title().should("include", "WebDriver | Contact Us");
    cy.url().should("include", "contactus");

    contact_Us_PO.contactForm_Submission(
      data.first_name,
      data.last_name,
      data.email,
      "Hi",
      "h1",
      "Thank You for your Message!22"
    );
  });

  it("Should not be able to submit a successfull submission via contact us form as all fields are required", function () {
    contact_Us_PO.contactForm_Submission(
      data.first_name,
      data.last_name,
      " ",
      "Hi",
      "body",
      "Error: Invalid email address"
    );
  });
});
