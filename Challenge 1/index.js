const fs = require("fs");

// fs.mkdirSync("thapa")
// fs.writeFileSync("thapa/bio.txt", "this is bio file");
// fs.appendFileSync("thapa/bio.txt", "this is my first challenge");

// const data = fs.readFileSync("thapa/bio.txt", "utf-8");
// const stringData = data.toString(); //dono se krskte hain utf 8 se bh or toString se bh
// console.log(data);

//rename file
// fs.renameSync("thapa/bio.txt", "myBio.txt");

//delete file
// fs.unlinkSync("thapa");

//delete folder
fs.rmdirSync("thapa");
