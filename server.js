import { log } from "console";
import http from "http";
http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.write('Hello World!');
  res.end();
}).listen(3000,'10.2.201.153',()=>{
  console.log("server is running")
});
