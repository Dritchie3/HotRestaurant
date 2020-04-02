var express = require("express");
<<<<<<< HEAD
var bodyParser = require("body-parser");

var app = express();


var PORT = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


require("./routes/apiRoutes")(app);
require("./routes/htmlRoutes")(app);

app.listen(PORT, function() {
  console.log("App listening on PORT: " + PORT);
});
=======
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
>>>>>>> 14886d1119bcf1ce5389872dc55f4b6427a96ae6
