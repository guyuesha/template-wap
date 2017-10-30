// 引入fs文件处理模块
var fs = require("fs");
var src = 'images';

// API文档中中找到遍历文件夹的API
// 找到了，是fs.readdir(path, callback)
// 文档中有叙述：
// 读取 path 路径所在目录的内容。 回调函数 (callback) 接受两个参数 (err, files) 其中 files 是一个存储目录中所包含的文件名称的数组
// 因此：
fs.readdir(src, function(err, files) {
    // files是名称数组，因此
    files.forEach(function(filename) {
        // 下面就是文件名称重命名
        // API文档中找到重命名的API，如下
        // fs.rename(oldPath, newPath, callback)
        var oldPath = src + '/' + filename,
            newPath = src + '/' + filename.replace(/ /g, '-').replace(/@/g, '__');
        // 重命名走起
        fs.rename(oldPath, newPath, function(err) {
            if (!err) {
                console.log(filename + '下划线替换成功!');
            }
        })
    });
});