// 1
// console.log('こんにちは世界');

// 2
//var value = 0;
//for(var i = 2; i < process.argv.length; i++){
//  value += Number(process.argv[i]);
//}
//console.log(value);

// 3
//var fs = require('fs');
//var buf = fs.readFileSync(process.argv[2]);
//console.log(buf.toString().split('\n').length - 1);

//4
//var fs = require('fs');
//fs.readFile(process.argv[2], function(err, data){
//  var content = data.toString();
//  var lines = content.split('\n').length - 1;
//  console.log(lines);
//});

//5
// var fs = require('fs');
// var path = require('path');
// var dir = process.argv[2];
// var type = process.argv[3];
// fs.readdir(dir, function(err, data){
//   if(err){
//     console.log(err);
//     return;
//   }
//
//   for(var i = 0; i < data.length; i++){
//     if(path.extname(data[i]) == '.' + type){
//       console.log(data[i]);
//     }
//   }
// });

//6
// var myModule = require('./mymodule.js');
// var dirName = process.argv[2];
// var fileType = process.argv[3];
// myModule(dirName, fileType, function(err, data){
//   if(err){
//     console.log(err);
//     return;
//   }
//
//   for(var i = 0; i < data.length; i++){
//     console.log(data[i]);
//   }
// });

//7
// var http = require('http');
// http.get(process.argv[2], function(response){
//   response.setEncoding("utf-8");
//   response.on("data", function(data){
//     console.log(data);
//   });
// });

//8
// var http = require('http');
// var bl = require('bl');
// http.get(process.argv[2], function(response){
//   response.pipe(bl(function(err, data){
//     if(err)
//       return console.error(err);
//
//     data = data.toString();
//     console.log(data.length);
//     console.log(data);
//   }));
// });

// 9
// var http = require('http')
// var bl = require('bl')
// var results = []
// var count = 0
//
// function printResults () {
//   for (var i = 0; i < 3; i++) {
//     console.log(results[i])
//   }
// }
//
// function httpGet (index) {
//   http.get(process.argv[2 + index], function (response) {
//     response.pipe(bl(function (err, data) {
//       if (err) {
//         return console.error(err)
//       }
//
//       results[index] = data.toString()
//       count++
//
//       if (count === 3) {
//         printResults()
//       }
//     }))
//   })
// }
//
// for (var i = 0; i < 3; i++) {
//   httpGet(i)
// }
/*
var myModule = require('./mymodule.js');
var url = new Array();
for(var i = 2, j = 0; i < process.argv.length; i++){
  url[j++] = {
    'url': process.argv[i] ,
    'response': undefined
  };
}

for(var i = 2; i < process.argv.length; i++){
  myModule(process.argv[i], function(response){
    for(var j = 0; j < url.length; j++){
      if(url[j]['url'] !== response['url']) continue;
      if(url[j]['response'] !== undefined) continue;
      url[j]['response'] = response['response'];
    }

    var j = 0;
    for(; j < url.length; j++) if(url[j]['response'] === undefined) break;

    if(j === url.length){
      for(var j = 0; j < url.length; j++){
        console.log(url[j]['response']);
      }
    }
  });
}
*/

// 10
// var net = require('net');
// var server = net.createServer(function(socket){
//   var lpad = function(value, length){
//     var pad = '';
//     for(var i = 0; i < length; i++) pad += '0';
//     return (pad + value).slice(-length);
//   };
//
//   var date = new Date();
//   var strDate = date.getFullYear()
//   + '-'
//   + lpad(date.getMonth() + 1, 2)
//   + '-'
//   + lpad(date.getDate(), 2)
//   + ' '
//   + lpad(date.getHours(), 2)
//   + ':'
//   + lpad(date.getMinutes(), 2)
//   + '\r\n'
//   ;
//
//   socket.end(strDate);
// });
// server.listen(process.argv[2]);

// 11
// var http = require('http');
// var fs = require('fs');
// var server = http.createServer(function (req, res) {
//   fs.createReadStream(process.argv[3]).pipe(res);
// })
// server.listen(process.argv[2]);

// 12
console.log(process.argv);
