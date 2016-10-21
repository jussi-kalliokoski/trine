let path = require('path');
let glob = require('glob');
let files = glob.sync(path.join(__dirname, '**', '*.js'));
let fileRx = new RegExp(`^${__dirname}/.*?/(.*?).js$`);

files.forEach(function(fileName){
  let [,name] = fileRx.exec(fileName) || [];
  name && (module.exports[name] = require(fileName)[name]);
});