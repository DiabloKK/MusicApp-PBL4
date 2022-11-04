
var {exec, spawn} = require('child_process')


const listMusic = [];

function addFile() {
    exec("ls", (err, stdout, stderr) => {
        if(err) console.error(stderr);
        console.log(stdout);
    })
}

export {addFile};