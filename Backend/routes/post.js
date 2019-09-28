var bodyParser = require("body-parser"),
methodOverride = require("method-override"), 
mongoose = require("mongoose"), 
express = require("express"),
app = express();

//APP
mongoose.connect(
    "mongodb://localhost:27017")
  .then(() => {
      console.log("Connected to database!");
  })
  .catch(() => {
      console.log("Connection failed!");
  });

app.set("view engine","ejs"); 
app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended: true}));
app.use(methodOverride("_method"));

//MONGOOSE
 var  blogSchema = require("../Model/Posts"); 

 var Blog = mongoose.model("Blog", blogSchema);

//RESTFUL // Routing to be change according to the Frontend
app.get("/", function(req, res){
    res.redirect("/blogs");
});
//INDEX
app.get("/blogs", function(req, res){
    Blog.find({}, function(err, blogs){
        if(err){
            console.log("ERROR!");
        } else {
            res.render("index", {blogs: blogs});
        }
    });
});

//NEW
app.get("/blogs/new", function(req, res){
       res.render("new");
});

//CREATE
app.post("/blogs",function(req, res){

    Blog.create(req.body.blog, function(err, newBlog){
        if(err){
            res.render("new");
        } else {
            res.redirect("/blogs");
        }

    });
});

//SHOW
app.get("/blogs/:id", function(req, res){
    Blog.findById(req.params.id, function(err, foundBlog){
        if(err){
            res.redirect("/blogs");
        } else {
            res.render("show", {blog: foundBlog});
        }
    });
});

//EDIT
app.get("/blogs/:id/edit", function(req, res){
    Blog.findById(req.params.id, function(err, foundBlog){
        if(err){
            res.redirect("/blogs");
        } else {
            res.render("edit", {blog: foundBlog});
        }

    });
});

//UPDATE
app.put("/blogs/:id", function(req,res){
        Blog.findById(req.params.id, req.body.blog, function(err, updatedBlog){
            if(err){
                res.redirect("/blogs");
            } else {
                res.redirect("/blogs/" + req.params.id);
            }
        });
});

//DELETE
app.delete("/blogs/:id",function(req, res){
   Blog.findByIdAndRemove(req.params.id, function(err){
       if(err){
           res.redirect("/blogs");
       } else {
           res.redirect("/blogs");
       }
   });

});


app.listen(process.env.PORT, process.env.IP,function(){
    console.log("SERVER IS RUNNING!");
});