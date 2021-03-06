"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const pad_string_1 = require("./pad-string");
const buffer_1 = require("buffer");
function encode(input, encoding = "utf8") {
    if (buffer_1.Buffer.isBuffer(input)) {
        return fromBase64(input.toString("base64"));
    }
    return fromBase64(buffer_1.Buffer.from(input, encoding).toString("base64"));
}
;
function decode(base64url, encoding = "utf8") {
    return buffer_1.Buffer.from(toBase64(base64url), "base64").toString(encoding);
}
function toBase64(base64url) {
    base64url = base64url.toString();
    return pad_string_1.default(base64url)
        .replace(/\-/g, "+")
        .replace(/_/g, "/");
}
function fromBase64(base64) {
    return base64
        .replace(/=/g, "")
        .replace(/\+/g, "-")
        .replace(/\//g, "_");
}
function toBuffer(base64url) {
    return buffer_1.Buffer.from(toBase64(base64url), "base64");
}
let base64url = encode;
base64url.encode = encode;
base64url.decode = decode;
base64url.toBase64 = toBase64;
base64url.fromBase64 = fromBase64;
base64url.toBuffer = toBuffer;
exports.default = base64url;
