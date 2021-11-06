import { hasTrojanSource } from "anti-trojan-source";

export function noBidi(context) {
  return {
    onCodePathStart: function (codePath, node) {
      // at the start of analyzing a code path
      if (node.tokens && Array.isArray(node.tokens)) {
        node.tokens.forEach((tokenObject) => {
          if (
            tokenObject.value &&
            hasTrojanSource({ sourceText: tokenObject.value })
          ) {
            context.report({
              node: node,
              data: {
                text: tokenObject.value.toString("utf-8"),
              },
              message:
                "Detected potential trojan source attack with unicode bidi introduced in this code: '{{text}}'.",
            });
          }
        });
      }

      if (node.comments && Array.isArray(node.comments)) {
        node.comments.forEach((tokenObject) => {
          if (
            tokenObject.value &&
            hasTrojanSource({ sourceText: tokenObject.value })
          ) {
            context.report({
              node: node,
              data: {
                text: tokenObject.value.toString("utf-8"),
              },
              message:
                "Detected potential trojan source attack with unicode bidi introduced in this comment: '{{text}}'.",
            });
          }
        });
      }
    },
  };
}
