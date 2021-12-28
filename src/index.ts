import { noBidi } from "./rules/no-bidi";

module.exports = {
  rules: {
    "no-bidi": {
      create: noBidi,
    },
  },
  configs: {
    recommended: {
      plugins: ['anti-trojan-source'],
      rules: {
        'anti-trojan-source/no-bidi': 'error',
      },
    },
  },
};
