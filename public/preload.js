var {exec} = require('child_process');
const { contextBridge } = require('electron');
var fs = require('fs');
const path = require('path');


const getInfoFile = (url,callback) => {
    console.log(url);
    const cmd = "exiftool -artist -title -duration " + url; 
    exec(cmd, (err, stdout) => {
        if(err) {
            console.log(err);
        } else {
            let array = stdout.split("\n");
            array.pop();
            for(let i=0; i<array.length; i++) {
                array[i] = array[i].substring(34);
            }
            callback(array);
        }
    });
}

const appendUrlIntoFile = (url, callback) => {
    fs.appendFile(path.join(__dirname, "./data/listUrlMusic.txt"), url, (err) => {
        if(err) {
            console.log(err);
        } else {
            //Luu tru thanh cong
            console.log("Luu url thanh cong");
            getInfoFile(url, callback);
        }
    });
}

const saveUrl = (url, callback) => {
    try {
        var data = fs.readFileSync(path.join(__dirname, "./data/listUrlMusic.txt"));
        if(!data.toString().includes(url)) {
            appendUrlIntoFile(url, callback);
        }
    } catch (error) {
        appendUrlIntoFile(url, callback);
    }
} 

contextBridge.exposeInMainWorld("handleFile" , {
    addMusic : (callback) => {
        exec("zenity --file-selection --file-filter=*.mp3", (err, stdout, stderr) => {
            if(err) console.error(stderr);
            else {
                saveUrl(stdout, callback);
            }
        })
    }
})