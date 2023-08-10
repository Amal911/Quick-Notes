import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static("public"));


var Heading = [];
var Content = [];

var workHeading = [];
var workContent = [];
var link;


app.get("/", function(req,res){
    link = "/"
    res.render("index.ejs",{
        link:link,
        heading:Heading,
        content:Content
    });
});

app.get("/work", function(req,res){
    link = "/work"
    res.render("index.ejs",{
        link:link,
        heading:workHeading,
        content:workContent
    });
});


app.post("/",function(req,res){
    var head = req.body.title
    var cont = req.body.para
    if(head || cont){
        Heading.push(head);
        Content.push(cont);
        res.redirect("/");
    }
});

app.post("/work",function(req,res){
    var head = req.body.title
    var cont = req.body.para
    if(head || cont){
        workHeading.push(head);
        workContent.push(cont);
        res.redirect("/work");
    }
});

app.listen(port, () => {
    console.log("Server is running..");
});
