const fs = require("fs");
//basically we perfrom simple CRUD operation in file i.e-> create-> writeFile, read-> readFile, update-> appendFile, delete-> unlink

// fs.writeFile("read.text", "this is a txt file", (err) => {
//   console.log("The file has been created");
//   console.log(err);
// });

// fs.appendFile("read.text", "adding more data in read file", (err) => {
//   console.log("the data has been added");
//   console.log(err);
// });

fs.readFile("read.txt", (err, saad) => {
  console.log(saad);
});
