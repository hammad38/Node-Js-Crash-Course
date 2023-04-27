
const fs = require("fs");

//creating a new file
// fs.writeFileSync("read.txt",  "This is a txt file created with writeFileSync method");
// fs.appendFileSync("read.txt", " with the method of append we can add more lines on the file");

//reading  file content

// const data_toShow = fs.readFileSync("read.txt");
// console.log(data_toShow); //it show data in form of binary, to see data we use toString method

// const org_Data = data_toShow.toString();
// console.log(org_Data);

//to rename the file

// fs.renameSync("read.txt", "readWrite.txt")
// fs.renameSync("readWrite.txt", "read.txt")
