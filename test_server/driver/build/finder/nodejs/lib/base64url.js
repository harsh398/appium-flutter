"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.decode = exports.encode = void 0;
const encode = (input) => Buffer.from(input)
    .toString(`base64`)
    .replace(/=/g, ``)
    .replace(/\+/g, `-`)
    .replace(/\//g, `_`);
exports.encode = encode;
const decode = (input) => {
    let base64String = ``;
    if (typeof input === `string`) {
        base64String = input;
    }
    else if (typeof input === `object` && input.ELEMENT) {
        base64String = input.ELEMENT;
    }
    else {
        throw new Error(`input is invalid ${JSON.stringify(input)}`);
    }
    return Buffer.from(base64String, `base64`).toString();
};
exports.decode = decode;
//# sourceMappingURL=base64url.js.map