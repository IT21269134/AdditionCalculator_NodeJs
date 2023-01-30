const express = require("express");
const bodyParser = require("body-parser");
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));

//index.html
app.get("/", (request, response) =>
  response.sendFile("/sandbox/Server/index.html")
);

app.post("/index.html", function (request, response) {
  var n1 = Number(request.body.n1);
  var n2 = Number(request.body.n2);
  var result = n1 + n2;
  response.send("The result is :" + result);
});

app.listen(8000, function () {
  console.log("Server is running on port 8000");
});

// app.get("/", (request, response) => response.send("Hello User"));
// app.get("/about", (request, response) =>
//   response.send("This is page is the aboutus page")
// );
// app.get("/courses", (request, response) =>
//   response.send("this contains all the courses.")
// );
