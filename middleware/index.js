import express from "express";
import  path  from "path";
import { fileURLToPath } from "url";



const app = express();
const port = 8000;

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.set('view engine', 'ejs');

app.use('/static', express.static(path.join(__dirname, 'public/assets')))

app.use(express.static('public'));
app.use('/static', express.static('public'));

app.get('/login' , function(req,res){
    res.render('login');
})




app.listen(port);