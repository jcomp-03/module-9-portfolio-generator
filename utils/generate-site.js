const fs = require('fs');

// A JavaScript Promise is an object that is waiting for
// a future value. Promises have three states: They can be
// pending, then can be fulfilled (i.e. they have been resolved)
// or they can be fail (i.e. they have been rejected).
// When the promise first starts, it's in the pending state
// It's either going to be fulfilled, or it's going to fail
// We're either going to resolve it, or reject it.

const writeFile = fileContent => {
    return new Promise((resolve, reject) => {
        fs.writeFile('./dist/index.html', fileContent, err => {
            // if there's an error, reject the Promise and
            // send the error to the Promise's '.catch()' method
            if (err) {
                reject(err);
                // since there's an error, return out of the function
                // here to avoid the Promise executing the resolve
                // function as well
                return;
            }

            // if the Promise is fulfilled, resolves the Promise
            // and send the data to the Promise's '.then()' method
            resolve({
                ok: true,
                message: 'File created!'
            }); 
        });
    });
};


const copyFile = () => {
    return new Promise((resolve, reject) => {
        fs.copyFile('./src/style.css', './dist/style.css', err => {
            // if there's an error in copying the file, reject the Promise
            // and send the error to the Promise's '.catch()' method
            if (err) {
                reject(err);
                // immediately return out of the function to avoid
                // the Promise from executing the resolve function too
                return;
            }

            resolve({
                ok: true,
                message: 'Successfully copied file!'
            });
        });
    });
};

// export the two functions so they can be imported in the file app.js
module.exports = {
    writeFile: writeFile,
    copyFile: copyFile
};