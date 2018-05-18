let App = require('./app.json');
let path = require('path');


let merge = function(a, b) {
    return {
        css: (a.css || []).concat(b.css || []),
        js: (a.js || []).concat(b.js || [])
    }
};

exports.entries = function() {
    let result = {};
    App.pages.forEach(p => {
        result[p.entry] = path.resolve(App.basePath, p.entry,"index.js")
    });
    return result
};

exports.templates = function() {
    return App.pages.map(p => {
        return {
            title: p.title,
            filename: p.entry + '.html',
            template: path.resolve(__dirname, 'index.tpl'),
            cdn: merge(App.cdn, p.cdn),
            chunks: ['commons', p.entry]
        }
    })
};

exports.externals = function() {
    return App.externals
};

const dist = "dist";
exports.dist = dist;





