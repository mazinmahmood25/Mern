import express from 'express'

const app = express();
const port = 8000;

app.get('/' , function(req , res){
    res.send("Hello World");
});
app.get('/about' , function(req , res){
    res.send("Hello about");
});
app.get('/about/:id(\\d+)' , function(req , res){
    res.send("Hello about from id");
});
app.get('/contact' , function(req , res){
    res.send("Hello contact");
});
app.get('/product' , function(req , res){
    res.send("Hello product");
});


app.get('/user/:id' , function(req , res){
    res.send(
    `<h1>Buy a Book</h1>
    <form>
        <label for="fname">Book Name:</label><br>
        <input type="text" id="fname" name="fname" value=""><br>
        <label for="lname">Book Season:</label><br>
        <input type="text" id="lname" name="lname" value=""><br><br>
        <input type="submit" value="Submit">
    </form>`);
});
app.get('/users' , function(req , res){
    const id = 1;
    const name = "mazin";
    res.send(
    `<a href="${'/users/'+id+'/'+name+'/form'}">Buy a Book</a>`)
});

app.get('/users/:id/:name/form' , function(req , res){
    res.send(
    `<h1>Buy a Book</h1>
    <form>
        User id : <input type="text" id="fname" name="fname" value="${req.params.id}"><br>
        User name :  <input type="text" id="lname" name="lname" value="${req.params.name}"><br><br>
        <input type="submit" value="Submit">
    </form>`);
});

app.listen(port);