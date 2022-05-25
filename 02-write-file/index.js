// import * as fs from 'fs';
import * as readline from 'node:readline/promises';
var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
   });
rl.write(`(You can press "Ctrl + D" to close) \n`);
rl.question("Why don't you type me something? ", (answer) => {
    // typetypetype
    // console.log('Nice letters lol');
    
});
rl.on('SIGINT', () => {
    rl.question('Quit? ', (answer) => {
        if (answer.match(/^y(es)?$/i)) {
            rl.end();
        }
    });
});