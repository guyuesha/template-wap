/*
 *  node makefile.js pagename
 *  function: copy module template from temp/index to src/module and rename html and js files
 *  pagename(arguments): the directory name under src/module，necessary
 */

const fs = require('fs-extra')
var moduleName = process.argv.slice(2)
// process.argv.forEach(function (val, index, array) {
//   view input arguments
//   console.log(index + ': ' + val, process.argv.slice(2));
// });
if(moduleName.length === 0) {
  console.log('Please enter the module name and rerun')
  return
} else if(moduleName.length > 1) {
  console.log('Warning: the name is more than one world.')
}
var dir = './src/module/' + moduleName[0]

var isFileExist = fs.existsSync(dir,err => {
  console.log(err) // => null
  // dir has now been created, including the directory it is to be placed in
})
if(isFileExist) {
  console.log('Error: The module already exists, please rename your module')
  return
}

var dest = './src/module/'+moduleName[0]
fs.copy('./temp/index', dest, err => {
  if (err) return console.error(err)
  var files = fs.readdir(dest, function(erro, files){
    files.forEach(function(filename){
      console.log(filename)
      var oldPath = dest + '/' + filename, newPath = dest + '/' + filename.replace(/index/g, moduleName[0]);
      fs.rename(oldPath, newPath, function(err) {
           if (err) return console.log('Warning: failed to rename module file!')
          //  console.log(filename + ' Renamed success!');
       })
    })
  })
  console.log("Build module success!")
});
