module.exports = function checkFacebook(callback) {
    var nightmare = Nightmare();
    Promise.resolve(nightmare
        .viewport(1000, 1000)
        .goto('https://www.facebook.com/groups/bierconomia')
        .evaluate(function () {
            var posts = document.getElementsByClassName('_1dwg')
            var length = posts.length
            var postsContent = []
            for (var i = 0; i < length; i++) {
                var pTag = posts[i].getElementsByTagName('p')
                postsContent.push({
                    content: pTag[0] ? pTag[0].innerText : '',
                    productLink: posts[i].querySelector('a[rel = "nofollow"]') ? posts[i].querySelector('a[rel = "nofollow"]').href : '',
                    photo: posts[i].getElementsByClassName('_46-i img')[0] ? posts[i].getElementsByClassName('_46-i img')[0].src : ''
                })
            }
            return postsContent
        }))
        .then(function (results) {
            log(results)
            return new Promise(function (resolve, reject) {
                var leanLinks = results.map(function (result) {
                    return {
                        post: {
                            content: result.content,
                            productLink: extractLinkFromFb(result.productLink),
                            photo: result.photo
                        }
                    }
                })
                resolve(leanLinks)
            })
        })
}

/* var Crawler = require("crawler");

var c = new Crawler({
    maxConnections: 10,
    // This will be called for each crawled page
    callback: function(error, res, done) {
        if (error) {
            console.log(error);
        } else {
            var $ = res.$;
            // $ is Cheerio by default
            //a lean implementation of core jQuery designed specifically for the server
            console.log($("title").text());
        }
        done();
    }
});


// Queue URLs with custom callbacks & parameters
c.queue([{
    uri: 'https://search.walla.co.il/?q=sdf',
    jQuery: false,

    // The global callback won't be called
    callback: function (error, res, done) {
        if(error){
            console.log(error);
        }else{
            console.log('Grabbed', res.body, 'bytes');
        }
        done();
    }
}]); */
/* const afterLoad = require('after-load');

afterLoad('http://stackoverflow.com/users/747579',function(html,$){
    console.log(`Abdennour's Reputation in Stackoverflow = ${html} `);
     //   7.6k
 });
 */
/* afterLoad('https://google.comhttps://www.simplex.com/join-us/?gh_jid=4105024002', function(html) {
    console.log(html);
}); */

/* var myObj = {

    run: function() {

        return () =>  //notice the syntax.
            console.log(this);
    }

};

myObj.run()(); //it will log the window object and not myObj context. */

/* var myObj = {

    run: function() {
        return function() {
            console.log(this);
        };
    }

};

myObj.run()(); //it will log the window object and not myObj context
 */


/* for (var i = 0; i < 4; i++) {
    (function (i) {
        setTimeout(() => console.log(i), 0)
      })(i);
}
 */

/* var fs = require('fs');
var path = require('path');
var walk = function(dir, done) {
    var results = [];
    fs.readdir(dir, function(err, list) {
        debugger;
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


var fs = require('fs');
var walk = function(dir, done) {
    var results = [];
    fs.readdir(dir, function(err, list) {

        if (err) return done(err);
        var i = 0;
        (function next() {

            var file = list[i++];
            if (!file) return done(null, results);

            file = dir + '/' + file;
            fs.stat(file, function(err, stat) {

                if (stat && stat.isDirectory()) {
                    walk(file, function(err, res) {
                        results = results.concat(res);
                        next();
                    });
                } else {
                    results.push(file);
                    next();
                }
            });
        })();
    });
};


walk('c:/data/', function(err, results) {
    if (err) throw err;
    console.log(results);
});


/* const express = require('express');
const app = express();

app.get('/', (req, res) => {
});

app.get('/api/courses', (req, res) => {
});

app.listen(3000, () => {
    debugger;
    console.log('listen');
}); */