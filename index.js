#!/usr/bin/env node

var fs = require('fs');
var path = require('path');

// 复制文件
function copyTemplate(from, to) {
    from = path.join(__dirname, 'templates', from);
    console.log(from);
    write(to, fs.readFileSync(from, 'utf-8'))
}

function write(path, str, mode) {
    fs.writeFileSync(path, str)
}

// 新建目录
function mkdir(path, fn) {
    fs.mkdir(path, function (err) {
        fn && fn()
    })
}

// 复制目录
var copy = function (src, dst) {
    let paths = fs.readdirSync(src); //同步读取当前目录(只能读取绝对路径，相对路径无法获取)
    paths.forEach(function (path) {
        var _src = src + '/' + path;
        var _dst = dst + '/' + path;
        fs.stat(_src, function (err, stats) {  //stats  该对象 包含文件属性
            if (err) throw err;
            if (stats.isFile()) { //如果是个文件则拷贝 
                let readable = fs.createReadStream(_src);//创建读取流
                let writable = fs.createWriteStream(_dst);//创建写入流
                readable.pipe(writable);
            } else if (stats.isDirectory()) { //是目录则 递归 
                checkDirectory(_src, _dst, copy);
            }
        });
    });
}

var checkDirectory = function (src, dst, callback) {
    fs.access(dst, fs.constants.F_OK, (err) => {
        if (err) {
            fs.mkdirSync(dst);
            callback(src, dst);
        } else {
            callback(src, dst);
        }
    });
};

var PATH = ".";

mkdir(PATH, function () {
    mkdir(PATH , function () {
        checkDirectory(__dirname+'/templates', PATH, copy);
    })
})

