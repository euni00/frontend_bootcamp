function adder(a, b, callback) {
  if (a == 0 || b == 0) {
    callback("no zero", null);
    return;
  }
  console.log(`${a}+${b}=${a + b}`);

  callback(null, a + b);
}

function handle_error(error) {
  console.log("ERROR: ", error);
}

function add_all(a, b, c) {
  adder(a, b, (err, result) => {
    if (err == null) {
      adder(result, c, (err, result2) => {
        if (err == null) {
          console.log(`${a}+${b}+${c}=${result2}`);
        } else {
          handle_error(err);
        }
      });
    } else {
      handle_error(err);
    }
  });
}
