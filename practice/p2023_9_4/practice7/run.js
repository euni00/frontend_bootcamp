const add_all = require("./promise");

const [_n, _f, a, b, c] = process.argv;

add_all(Number(a), Number(b), Number(c));
