var child_process = require('child_process');

console.log('the instant message now');


// notice how I have to write ./nodeUdemy/_fib.js or ./_fib.js
// depends on what directory I run node in
var newProcess = child_process.spawn('node', ['./_fib.js'], {
  stdio:'inherit'
});

console.log("this last message should show quickly");
