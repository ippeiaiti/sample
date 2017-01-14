// 6
// var fs = require('fs');
// var path = require('path');
// module.exports = function(dirName, fileType, callback)
// {
//   fileType = '.' + fileType;
//   fs.readdir(dirName, function(err, data){
//     if(err) return callback(err);
//
//     var fileList = new Array();
//     for(var i = 0; i < data.length; i++)
//       if(path.extname(data[i]) === fileType)
//         fileList[fileList.length] = data[i];
//
//     callback(null, fileList);
//   });
// }

// 9
// var http = require('http');
// var bl = require('bl');
// module.exports = function(in_url, callback)
// {
//   http.get(in_url, function(response){
//     response.pipe(bl(function(err, data){
//       if(err)
//         return console.error(err);
//
//       callback({
//         'url': in_url ,
//         'response': data.toString() ,
//       });
//     }));
//   });
// }

// 10
