const Ajv = require("ajv");

const ajv = new Ajv({ allErrors: true });
const { phoneNumberVeriCodeSchema } = require("../src/validator/user");

describe("test demo", () => {
  test("phoneNumberVeriCodeSchema", () => {
    const validate = ajv.compile(phoneNumberVeriCodeSchema);
    const data = {
      phoneNumber: "13683839929",
      veriCode: "1345",
    };
    const valid = validate(data);
    expect(valid).toBe(true);
  });
});
