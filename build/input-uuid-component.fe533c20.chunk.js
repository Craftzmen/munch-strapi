"use strict";
(self["webpackChunkstrapi_demo"] = self["webpackChunkstrapi_demo"] || []).push([[7099],{

/***/ 27046:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  FieldActionWrapper: () => (/* binding */ FieldActionWrapper),
  "default": () => (/* binding */ components_Input)
});

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(67294);
// EXTERNAL MODULE: ./node_modules/react-intl/lib/src/components/useIntl.js
var useIntl = __webpack_require__(86896);
// EXTERNAL MODULE: ./node_modules/@strapi/admin/node_modules/styled-components/dist/styled-components.browser.esm.js + 4 modules
var styled_components_browser_esm = __webpack_require__(71997);
// EXTERNAL MODULE: ./node_modules/@strapi/icons/dist/Refresh.js
var Refresh = __webpack_require__(30815);
;// CONCATENATED MODULE: ./node_modules/strapi-advanced-uuid/node_modules/uuid/dist/esm-browser/native.js
const randomUUID = typeof crypto !== "undefined" && crypto.randomUUID && crypto.randomUUID.bind(crypto);
/* harmony default export */ const esm_browser_native = ({
  randomUUID
});

;// CONCATENATED MODULE: ./node_modules/strapi-advanced-uuid/node_modules/uuid/dist/esm-browser/rng.js
let getRandomValues;
const rnds8 = new Uint8Array(16);
function rng() {
  if (!getRandomValues) {
    getRandomValues = typeof crypto !== "undefined" && crypto.getRandomValues && crypto.getRandomValues.bind(crypto);
    if (!getRandomValues) {
      throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");
    }
  }
  return getRandomValues(rnds8);
}

;// CONCATENATED MODULE: ./node_modules/strapi-advanced-uuid/node_modules/uuid/dist/esm-browser/stringify.js

const byteToHex = [];
for (let i = 0; i < 256; ++i) {
  byteToHex.push((i + 256).toString(16).slice(1));
}
function unsafeStringify(arr, offset = 0) {
  return (byteToHex[arr[offset + 0]] + byteToHex[arr[offset + 1]] + byteToHex[arr[offset + 2]] + byteToHex[arr[offset + 3]] + "-" + byteToHex[arr[offset + 4]] + byteToHex[arr[offset + 5]] + "-" + byteToHex[arr[offset + 6]] + byteToHex[arr[offset + 7]] + "-" + byteToHex[arr[offset + 8]] + byteToHex[arr[offset + 9]] + "-" + byteToHex[arr[offset + 10]] + byteToHex[arr[offset + 11]] + byteToHex[arr[offset + 12]] + byteToHex[arr[offset + 13]] + byteToHex[arr[offset + 14]] + byteToHex[arr[offset + 15]]).toLowerCase();
}
function stringify(arr, offset = 0) {
  const uuid = unsafeStringify(arr, offset);
  if (!validate(uuid)) {
    throw TypeError("Stringified UUID is invalid");
  }
  return uuid;
}
/* harmony default export */ const esm_browser_stringify = ((/* unused pure expression or super */ null && (stringify)));

;// CONCATENATED MODULE: ./node_modules/strapi-advanced-uuid/node_modules/uuid/dist/esm-browser/v4.js



function v4(options, buf, offset) {
  if (esm_browser_native.randomUUID && !buf && !options) {
    return esm_browser_native.randomUUID();
  }
  options = options || {};
  const rnds = options.random || (options.rng || rng)();
  rnds[6] = rnds[6] & 15 | 64;
  rnds[8] = rnds[8] & 63 | 128;
  if (buf) {
    offset = offset || 0;
    for (let i = 0; i < 16; ++i) {
      buf[offset + i] = rnds[i];
    }
    return buf;
  }
  return unsafeStringify(rnds);
}
/* harmony default export */ const esm_browser_v4 = (v4);

;// CONCATENATED MODULE: ./node_modules/strapi-advanced-uuid/node_modules/uuid/dist/esm-browser/regex.js
/* harmony default export */ const regex = (/^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i);

;// CONCATENATED MODULE: ./node_modules/strapi-advanced-uuid/node_modules/uuid/dist/esm-browser/validate.js

function validate_validate(uuid) {
  return typeof uuid === "string" && regex.test(uuid);
}
/* harmony default export */ const esm_browser_validate = (validate_validate);

// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Field/FieldAction.js
var FieldAction = __webpack_require__(25752);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Box/Box.js
var Box = __webpack_require__(41580);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Field/Field.js
var Field = __webpack_require__(54574);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Stack/Stack.js
var Stack = __webpack_require__(7681);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Flex/Flex.js
var Flex = __webpack_require__(11047);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Field/FieldLabel.js
var FieldLabel = __webpack_require__(64777);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Field/FieldInput.js
var FieldInput = __webpack_require__(45377);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Field/FieldHint.js
var FieldHint = __webpack_require__(63428);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Field/FieldError.js
var FieldError = __webpack_require__(96404);
// EXTERNAL MODULE: ./node_modules/strapi-advanced-uuid/admin/src/utils/helpers.ts
var helpers = __webpack_require__(96520);
;// CONCATENATED MODULE: ./node_modules/strapi-advanced-uuid/admin/src/components/Input/index.tsx







const FieldActionWrapper = (0,styled_components_browser_esm/* default */.ZP)((0,FieldAction/* FieldAction */.E))`
  svg {
    height: 1rem;
    width: 1rem;
    path {
      fill: ${({ theme }) => theme.colors.neutral400};
    }
  }

  svg:hover {
    path {
      fill: ${({ theme }) => theme.colors.primary600};
    }
  }
`;
const Input = ({
  attribute,
  description,
  placeholder,
  disabled,
  error,
  intlLabel,
  labelAction,
  name,
  onChange,
  value: initialValue = ""
}) => {
  const { formatMessage } = (0,useIntl/* default */.Z)();
  const [invalidUUID, setInvalidUUID] = (0,react.useState)(false);
  const ref = (0,react.useRef)("");
  const getUUIDFormat = () => {
    if (attribute.options && attribute.options["uuid-format"]) {
      return attribute.options["uuid-format"];
    }
    return null;
  };
  const generateNewUUID = () => {
    const uuidFormat = getUUIDFormat();
    return uuidFormat ? (0,helpers/* generateUUID */.DO)(uuidFormat) : esm_browser_v4();
  };
  (0,react.useEffect)(() => {
    const uuidFormat = getUUIDFormat();
    if (!initialValue) {
      const newUUID = generateNewUUID();
      onChange({ target: { value: newUUID, name } });
    }
    if (initialValue && initialValue !== ref.current)
      ref.current = initialValue;
    const validateValue = uuidFormat ? (0,helpers/* validateUUID */.ni)(uuidFormat, initialValue) : esm_browser_validate(initialValue);
    if (!validateValue)
      return setInvalidUUID(true);
    setInvalidUUID(false);
  }, [initialValue, attribute]);
  return /* @__PURE__ */ react.createElement(Box/* Box */.x, null, /* @__PURE__ */ react.createElement(
    Field/* Field */.g,
    {
      id: name,
      name,
      hint: description && formatMessage(description),
      error: error ?? (invalidUUID ? formatMessage({
        id: "uuid.form.field.error",
        defaultMessage: "The UUID format is invalid."
      }) : null)
    },
    /* @__PURE__ */ react.createElement(Stack/* Stack */.K, { spacing: 1 }, /* @__PURE__ */ react.createElement(Flex/* Flex */.k, null, /* @__PURE__ */ react.createElement(FieldLabel/* FieldLabel */.Q, null, formatMessage(intlLabel))), /* @__PURE__ */ react.createElement(
      FieldInput/* FieldInput */._,
      {
        onChange,
        labelAction,
        placeholder,
        disabled: disabled || true,
        required: true,
        value: initialValue,
        ref,
        endAction: /* @__PURE__ */ react.createElement(
          FieldActionWrapper,
          {
            onClick: () => {
              const newUUID = generateNewUUID();
              onChange({ target: { value: newUUID, name } });
            },
            label: formatMessage({
              id: "uuid.form.field.generate",
              defaultMessage: "Generate"
            })
          },
          /* @__PURE__ */ react.createElement(Refresh/* default */.Z, null)
        )
      }
    ), /* @__PURE__ */ react.createElement(FieldHint/* FieldHint */.J, null), /* @__PURE__ */ react.createElement(FieldError/* FieldError */.c, null))
  ));
};
/* harmony default export */ const components_Input = (Input);


/***/ })

}]);