var fs = require("fs");
fs.readFile(process.argv[2], function (err, data) {
  if (err) {
    return console.error(err);
  }
  var n = data.toString().split("\n").length;
  console.log(n - 1);
});
