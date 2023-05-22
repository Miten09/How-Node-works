const fs = require("fs");
const server = require("http").createServer();

server.on("request", (req, res) => {
  // solution 1
  //   fs.readFile("test-file.txt", (err, data) => {
  //     if (err) console.log(err);
  //     res.end(data);
  //   });
  // solution 2 : streams
  //   const readable = fs.createReadStream("test-file222.txt");
  //   readable.on("data", (chunk) => {
  //     res.write(chunk);
  //   });
  //   readable.on("end", () => {
  //     res.end();
  //   });
  //   readable.on("error", (err) => {
  //     res.statusCode = 500;
  //     res.end("File Not Found");
  //   });
  // solution 3
  //To handle Back pressure.
  const readable = fs.createReadStream("test-file.txt");
  readable.pipe(res);
  //readable.pipe(writeableDest)
});

server.listen(7000, "127.0.0.1", () => {
  console.log("Listening.....");
});
