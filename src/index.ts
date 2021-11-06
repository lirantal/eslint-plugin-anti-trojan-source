import { noBidi } from "./rules/no-bidi";

module.exports = {
  rules: {
    "no-bidi": {
      create: noBidi,
    },
  },
};
