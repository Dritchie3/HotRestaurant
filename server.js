var express = require("express");
var path = require("path");
var app = express();
var PORT = 3000;
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.listen(PORT, function () {
    console.log("App listening on https://PORT" + PORT);
});
class Table {
    constructor(name, id, email, phone, tablenum) {
        this.name = "name";
        this.id = "id";
        this.email = 'email';
        this.phone = 'phone';
        this.tablenum = "number"
    }
}
// routes to view or add html
app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "view.html"));
  });
  
  app.get("/add", function(req, res) {
    res.sendFile(path.join(__dirname, "add.html"));
  });