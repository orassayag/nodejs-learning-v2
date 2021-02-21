/* eslint-disable getter-return */
const log = require('./logger');
const path = require('path');

const pathObj = path.parse(__filename);

const test = () => {

    for (let i = 0; i < 5; i++) {

        let f = 'hello';
    }
};

test();

/* console.log(pathObj); */

/* var fs = require('fs');
var walk = function(dir, done) {
    console.log('inside', dir);
    var results = [];
    fs.readdir(dir, function(err, list) {

        if (err) {
            return done(err);
        }

        var pending = list.length;
        if (!pending) {
            return done(null, results);
        }

        list.forEach(function(file) {

            file = path.resolve(dir, file);

            fs.stat(file, function(err, stat) {

                if (stat && stat.isDirectory()) {
                    walk(file, function(err, res) {
                        results = results.concat(res);
                        if (!--pending) done(null, results);
                    });
                } else {
                    results.push(file);
                    if (!--pending) done(null, results);
                }
            });
        });
    });
};

walk('c:/data', function(err, results) {
    if (err) throw err;
    console.log(results);
  }); */