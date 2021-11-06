const { RuleTester } = require("eslint");
const noBidi = require("../dist/index.js");

const ruleTester = new RuleTester();

describe("asserting code-line issues", () => {
  const fixtureNoCodeIssue = `
  var accessLevel = "user";
  if (accessLevel != "user") { // Check if admin
    console.log("You are an admin.");
  }
  `;

  const fixtureCodeIssue = `
  var accessLevel = "user";
  if (accessLevel != "user‮ ⁦// Check if admin⁩ ⁦") {
      console.log("You are an admin.");
  }
  `;

  ruleTester.run("no-bidi", noBidi.rules["no-bidi"], {
    valid: [{ code: fixtureNoCodeIssue }],
    invalid: [
      {
        code: fixtureCodeIssue,
        errors: [
          {
            message:
              /Detected potential trojan source attack with unicode bidi introduced in this code/i,
          },
        ],
      },
    ],
  });
});

describe("asserting comment-line issues", () => {
  const fixtureNoCodeIssue = `
  var isAdmin = false;
  /* begin admins only */ if (isAdmin) {
    console.log("You are an admin.");
  /* end admins only */ }
  `;

  const fixtureCodeIssue = `
var isAdmin = false;
/*‮ } ⁦if (isAdmin)⁩ ⁦ begin admins only */
    console.log("You are an admin.");
/* end admins only ‮ { ⁦*/
  `;

  ruleTester.run("no-bidi", noBidi.rules["no-bidi"], {
    valid: [{ code: fixtureNoCodeIssue }],
    invalid: [
      {
        code: fixtureCodeIssue,
        errors: [
          {
            message:
              /Detected potential trojan source attack with unicode bidi introduced in this comment/i,
          },
          {
            message:
              /Detected potential trojan source attack with unicode bidi introduced in this comment/i,
          },
        ],
      },
    ],
  });
});
