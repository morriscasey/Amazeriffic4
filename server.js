var express = require("express"),
    http = require("http"),
    app = express(),
    toDos = [{ 
		"description" : "Get groceries",
		"tags" : ["shopping","chores"]
	    },
	    {
		"description" : "Make up some new ToDos",
		"tags" : ["writing","work"]
		
	    }];

//Create a server using Express
http.createServer(app).listen(3000);

app.use(express.static(__dirname + "/client"));
app.use(express.urlencoded());
app.use(express.json());


//Route
app.get("/todos.json", function (req, res){
   res.json(toDos);
});

app.post("/todos", function (req,res){
	// the object is now stored in req.body
	var newToDo = req.body;
	console.log(newToDo);
	toDos.push(newToDo);

	//send back a simple object
	res.json({"message":"You posted to the server!"});
});
