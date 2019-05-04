var http = require("http");
var server = http.createServer();

server.on("request", function(req, res) {
  var data;
  if (req.method == "GET") {
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.write("Thank You GET");
    res.end();
  } else if (req.method == "POST") {
    req
      .on("data", function(chunk) {
        data += chunk;
      })
      .on("end", function() {
        console.log(data);
        res.writeHead(200, { "Content-Type": "text/plain" });
        res.write("Thank You POST");
        res.end();
      });
  }
});

// 第1引数: ポート番号
// 第2引数: IPアドレス
server.listen(3000);
