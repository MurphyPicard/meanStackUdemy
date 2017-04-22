var fs = require('fs');
var onFileLoad = function(err,file){
  console.log("got the file");
}
console.log(1);

fs.readFile('./nodeUdemy/readFileSync.js', onFileLoad);

console.log(3);
