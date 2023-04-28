const fs = require("fs");

fs.writeFile("read.text", "this is a txt file", (err) => {
  console.log("The file has been created");
  console.log(err);
});
fs.unlink("readwrite.text", (err) => {
  console.log("The file has been deleted");
  console.log(err);
});
