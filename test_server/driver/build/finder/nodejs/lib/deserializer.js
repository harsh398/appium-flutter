"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deserialize = void 0;
const base64url_1 = require("./base64url");
// @todo consider using protobuf
const deserialize = (base64String) => JSON.parse((0, base64url_1.decode)(base64String));
exports.deserialize = deserialize;
//# sourceMappingURL=deserializer.js.map