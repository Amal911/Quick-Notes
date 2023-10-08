import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static("public"));


mongoose.connect('mongodb://127.0.0.1:27017/TodoDB');

const notesSchema = {
    heading: String,
    note: String
};

const Note = mongoose.model("note",notesSchema);

const note1 = new Note({
    heading: "Hello World",
    note: "Keep your notes posted here"
});

// note1.save();



var link;



app.get("/", function(req,res){

    Note.find({}).then(function(doc){
        // console.log(doc);
    
        link = "/"
        res.render("index.ejs",{
            link:link,
            notes:doc
        });

    });
});

app.post("/",function(req,res){
    var head = req.body.title
    var cont = req.body.para
    if(head || cont){
        const newNote = new Note({
            heading: head,
            note: cont
        });
        
        newNote.save();
        res.redirect("/");
    }
    else{
        res.redirect("/");
    }
});

app.post("/delete",function(req,res){
    let id = req.body.deleteId
    Note.findByIdAndRemove(id).exec();
    res.redirect("/");
});



















// app.get("/work", function(req,res){
//     link = "/work"
//     res.render("index.ejs",{
//         link:link,
//         heading:workHeading,
//         content:workContent
//     });
// });




// app.post("/work",function(req,res){
//     var head = req.body.title
//     var cont = req.body.para
//     if(head || cont){
//         workHeading.push(head);
//         workContent.push(cont);
//         res.redirect("/work");
//     }
// });

app.listen(port, () => {
    console.log("Server is running..");
});
