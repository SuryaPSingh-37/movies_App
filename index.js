var express = require("express");
var app = express();
var request = require("request");


app.get("/",function(req,res)
	   {
			res.render("Search.ejs");
	
});


app.get("/result",function(req,res)
	   {    
			var term = req.query.search;
			var url ="http://www.omdbapi.com/?s="+term+"&apikey=thewdb";
			request(url,function(error,response,body)
				   {
						if(!error&&response.statusCode==200)
							{
								var data = JSON.parse(body);
								res.render("Result.ejs",{data:data});
								
							}
				})
			
});

app.listen(process.env.PORT||3000,process.env.IP,function()
		  {
				console.log("Movie app has started!");
});
