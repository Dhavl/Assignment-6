var http = require('http');
var JSONobject={outcome:'Win',
wins:'1',
loses:'2',
ties:'3'};
var win=0,lose=0,tie=0;
var string=['rock','paper','scissors','lizard','spock'];
var express = require("express");
var app;

var express = require("express");
var JSONobject= {outcome:"win",wins: 3,losses: 2 ,ties: 0};
var win=0;
var loss=0;
var tie=0;
var http = require("http");

var app;

app = express();

http.createServer(app).listen(3000);


app.get("/", function (req, res)
{
  app.use('/',express.static(__dirname, '/'));
	res.sendFile('/11.html', {root: __dirname });
  //res.send("<html><head><title>Assignment 6</title><body><h1>Let's Play!</h1>\n<form method='POST' action='/play/rock'><input type='submit' value='rock'></form>\n<form method='POST' action='/play/paper'><input type='submit' value='paper'></form>\n<form method='POST' action='/play/scissor'><input type='submit' value='scissor'></form>\n<form method='POST' action='/play/lizard'><input type='submit' value='lizard'></form>\n<form method='POST' action='/play/spock'><input type='submit' value='spock'></form></body></html>");
});

app.post("/play/rock", function (req, res)
{
        var userChoice='rock';
        var serverChoice= ["rock","paper","scissor","lizard","spock"];
        var rest= serverChoice[Math.floor(Math.random()*serverChoice.length)];
        
        
        if(userChoice==="rock")
         {
            if(userChoice===rest)
            {
              //response.writeHead(200);
              tie=tie+1;
              JSONobject.outcome='tie';
              JSONobject.wins=win;
              JSONobject.losses=loss;
              JSONobject.ties=tie;
              res.json(JSON.stringify(JSONobject));
              //response.end();
            }

            else if(rest==="paper")
            {
              //response.writeHead(200);
              loss=loss+1;
              JSONobject.outcome='loss';
              JSONobject.wins=win;
              JSONobject.losses=loss;
              JSONobject.ties=tie;
              res.json(JSON.stringify(JSONobject));
              //response.end();
            }

            else if(rest==="scissor")
            {
              //response.writeHead(200);
              win=win+1;
              JSONobject.outcome='win';
              JSONobject.wins=win;
              JSONobject.losses=loss;
              JSONobject.ties=tie;
              res.send(JSON.stringify(JSONobject))
              //response.end();
            }
            
            else if(rest==="lizard")
            {
              //response.writeHead(200);
              win=win+1;
              JSONobject.outcome='win';
              JSONobject.wins=win;
              JSONobject.losses=loss;
              JSONobject.ties=tie;
              res.send(JSON.stringify(JSONobject))
              //response.end();
              
            }

            else(rest==="spock")
            {
              //response.writeHead(200);
              loss=loss+1;
              JSONobject.outcome='loss';
              JSONobject.wins=win;
              JSONobject.losses=loss;
              JSONobject.ties=tie;
              res.send(JSON.stringify(JSONobject))
              //response.end();
              
            }

         }   
      
	res.send("<html><head></head><body><h1>Rock</h1></body></html>");
});

app.post("/play/paper", function (req, res)
{
	    var userChoice='paper';
        var serverChoice= ["rock","paper","scissor","lizard","spock"];
        var rest= serverChoice[Math.floor(Math.random()*serverChoice.length)];
        
        if(userChoice==="paper")
         {
            if(userChoice===rest)
            {
              //response.writeHead(200);
              tie=tie+1;
              JSONobject.outcome='tie';
              JSONobject.wins=win;
              JSONobject.losses=loss;
              JSONobject.ties=tie;
              res.send(JSON.stringify(JSONobject))
              //response.end();
              
            }

            else if(rest==="rock")
            {
              //response.writeHead(200);
              win=win+1;
              JSONobject.outcome='win';
              JSONobject.wins=win;
              JSONobject.losses=loss;
              JSONobject.ties=tie;
              res.send(JSON.stringify(JSONobject))
              //response.end();
              
            }

            else if(rest==="scissor")
            {
              //response.writeHead(200);
              loss=loss+1;
              JSONobject.outcome='loss';
              JSONobject.wins=win;
              JSONobject.losses=loss;
              JSONobject.ties=tie;
              res.send(JSON.stringify(JSONobject))
              //response.end();
              
            }
            
            else if(rest==="lizard")
            {
              //response.writeHead(200);
              loss=loss+1;
              JSONobject.outcome='loss';
              JSONobject.wins=win;
              JSONobject.losses=loss;
              JSONobject.ties=tie;
              res.send(JSON.stringify(JSONobject))
              //response.end();
              
            }

            else(rest==="spock")
            {
              //response.writeHead(200);
              win=win+1;
              JSONobject.outcome='win';
              JSONobject.wins=win;
              JSONobject.losses=loss;
              JSONobject.ties=tie;
              res.json(JSON.stringify(JSONobject));
              //response.end();
              
            }

         }   
      
	res.send("<html><head></head><body><h1>Paper</h1></body></html>");

});

app.post("/play/scissor", function (req, res)
{
	var userChoice='scissor';
        var serverChoice= ["rock","paper","scissor","lizard","spock"];
        var rest= serverChoice[Math.floor(Math.random()*serverChoice.length)];
        
        if(userChoice==="scissor")
         {
            if(userChoice===rest)
            {
              //response.writeHead(200);
              tie=tie+1;
              JSONobject.outcome='tie';
              JSONobject.wins=win;
              JSONobject.losses=loss;
              JSONobject.ties=tie;
              res.send(JSON.stringify(JSONobject))
              //response.end();
              
            }

            else if(rest==="rock")
            {
              //response.writeHead(200);
              win=win+1;
              JSONobject.outcome='win';
              JSONobject.wins=win;
              JSONobject.losses=loss;
              JSONobject.ties=tie;
              res.send(JSON.stringify(JSONobject))
              response.end();
              
            }

            else if(rest==="paper")
            {
              //response.writeHead(200);
              win=win+1;
              JSONobject.outcome='win';
              JSONobject.wins=win;
              JSONobject.losses=loss;
              JSONobject.ties=tie;
              res.send(JSON.stringify(JSONobject))
              response.end();
              
            }
            
            else if(rest==="lizard")
            {
              //response.writeHead(200);
              win=win+1;
              JSONobject.outcome='win';
              JSONobject.wins=win;
              JSONobject.losses=loss;
              JSONobject.ties=tie;
              res.send(JSON.stringify(JSONobject))
              //response.end();
              
            }

            else(rest==="spock")
            {
              //response.writeHead(200);
              loss=loss+1;
              JSONobject.outcome='loss';
              JSONobject.wins=win;
              JSONobject.losses=loss;
              JSONobject.ties=tie;
              res.json(JSON.stringify(JSONobject));
              //response.end();
              
            }

         }   

	res.send("<html><head></head><body><h1>Scissor</h1></body></html>");

});
app.post("/play/lizard", function (req, res)
{
	var userChoice='lizard';
        var serverChoice= ["rock","paper","scissor","lizard","spock"];
        var rest= serverChoice[Math.floor(Math.random()*serverChoice.length)];
        
        
        if(userChoice==="lizard")
         {
            if(userChoice===rest)
            {
              //response.writeHead(200);
              tie=tie+1;
              JSONobject.outcome='tie';
              JSONobject.wins=win;
              JSONobject.losses=loss;
              JSONobject.ties=tie;
              res.json(JSON.stringify(JSONobject));
              //response.end();
              
            }

            else if(rest==="rock")
            {
              //response.writeHead(200);
              loss=loss+1;
              JSONobject.outcome='loss';
              JSONobject.wins=win;
              JSONobject.losses=loss;
              JSONobject.ties=tie;
             res.json(JSON.stringify(JSONobject));
              //response.end();
              
            }

            else if(rest==="scissor")
            {
              //response.writeHead(200);
              loss=loss+1;
              JSONobject.outcome='loss';
              JSONobject.wins=win;
              JSONobject.losses=loss;
              JSONobject.ties=tie;
             res.json(JSON.stringify(JSONobject));
              //response.end();
              
            }
            
            else if(rest==="paper")
            {
              //response.writeHead(200);
              win=win+1;
              JSONobject.outcome='win';
              JSONobject.wins=win;
              JSONobject.losses=loss;
              JSONobject.ties=tie;
             res.json(JSON.stringify(JSONobject));
              //response.end();
              
            }

            else(rest==="spock")
            {
              //response.writeHead(200);
              loss=loss+1;
              JSONobject.outcome='loss';
              JSONobject.wins=win;
              JSONobject.losses=loss;
              JSONobject.ties=tie;
             res.json(JSON.stringify(JSONobject));
              //response.end();
              
            }

         }   
      
	res.send("<html><head></head><body><h1>lizard</h1></body></html>");

});
app.post("/play/spock", function (req, res)
{
	var userChoice='spock';
        var serverChoice= ["rock","paper","scissor","lizard","spock"];
        var rest= serverChoice[Math.floor(Math.random()*serverChoice.length)];
        
        
        if(userChoice==="spock")
         {
            if(userChoice===rest)
            {
              //response.writeHead(200);
              tie=tie+1;
              JSONobject.outcome='tie;'
              JSONobject.wins=win;
              JSONobject.losses=loss;
              JSONobject.ties=tie;
             res.json(JSON.stringify(JSONobject));
              //response.end();
              
            }

            else if(rest==="rock")
            {
              //response.writeHead(200);
              win=win+1;
              JSONobject.outcome='win';
              JSONobject.wins=win;
              JSONobject.losses=loss;
              JSONobject.ties=tie;
             res.json(JSON.stringify(JSONobject));
              //response.end();
              
            }

            else if(rest==="scissor")
            {
              //response.writeHead(200);
              win=win+1;
              JSONobject.outcome='win';
              JSONobject.wins=win;
              JSONobject.losses=loss;
              JSONobject.ties=tie;
             res.json(JSON.stringify(JSONobject));
              //response.end();
              
            }
            
            else if(rest==="lizard")
            {
              //response.writeHead(200);
              loss=loss+1;
              JSONobject.outcome='loss';
              JSONobject.wins=win;
              JSONobject.losses=loss;
              JSONobject.ties=tie;
             res.json(JSON.stringify(JSONobject));
              //response.end();
              
            }

            else(rest==="paper")
            {
              //response.writeHead(200);
              win=win+1;
              JSONobject.outcome='win';
              JSONobject.wins=win;
              JSONobject.losses=loss;
              JSONobject.ties=tie;
              res.json(JSON.stringify(JSONobject));
              //response.end();
              
            }

         }   
	res.send("<html><head></head><body><h1>Spock</h1></body></html>");

});
