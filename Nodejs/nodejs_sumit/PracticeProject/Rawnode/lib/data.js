//dependencies
const fs = require("fs");
const { defaultTo } = require("lodash");
const path = require("path");

const lib = {};

lib.baseDir = path.join(__dirname, "/../.data/");

lib.create = function (dir, file, data, callback) {
    //open file for writing

    fs.open(
        lib.baseDir + dir + "/" + file + ".json",
        "wx",
        function (error, fileDescriptor) {
            if (!error && fileDescriptor) {
                const stringData = JSON.stringify(data);

                fs.writeFile(fileDescriptor, stringData, (err) => {
                    if (!err) {
                        fs.close(fileDescriptor, (err) => {
                            if (!err) {
                                callback(false);
                            } else {
                                callback("error in file closing");
                            }
                        });
                    } else {
                        callback("Error writing to new file!");
                    }
                });
            } else {
                callback("could not created newfie, it may already there!"); 
            }
        }
    );
};

module.exports = lib;
