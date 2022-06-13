import { dbconnection , ObjectId} from '../database/connection.js';


export function index(req, res) {
    res.render("login");
}

export function add(req, res) {
    res.render("add");
}

export function insert(req, res) {
    dbconnection().then((client) => {
        const usersCollection = client.db('codegirls').collection('products');
        usersCollection.insertOne(req.body,(err, userData) => {
            if(userData.acknowledged){
                res.render("add" , {product: userData , success : true});
            }else {
                res.render("add" , {product: userData , success : false});
            }
            
        });
    });
}
export function edit(req, res) {
    dbconnection().then(async function (client) {
        const productCollections = client
          .db("codegirls")
          .collection("products");
        await productCollections.find({"_id":new ObjectId(req.params.id)}).toArray((err, userData) => {
          if (err) throw err;
         
            console.log("sadas",userData)
            res.render("edit", { product: userData[0] });
        
        });
      });
}

export function update(req, res){
    dbconnection().then(async function (client) {
      const productCollections = client
        .db("codegirls")
        .collection("products");
        console.log(req.params.id)
        console.log(req.body.uname,req.body.psw)
      await productCollections.updateOne(
        { _id: new ObjectId(req.params.id) },
        { $set: { uname: req.body.uname, psw: req.body.psw } },
        (err, userData) => {
            console.log(userData)
          if (err) throw err;
          if (userData.acknowledged) {
            res.redirect("/view");
            // res.render("login");
          } else {
            res.redirect("/view");
          }
        }
      );
    });
  };
export function view(req, res) {
    dbconnection().then((client) => {
        const usersCollection = client.db('codegirls').collection('products');
    usersCollection.find({/*psw:{$lt:"2000"}*/}).toArray((err, userData) => {
            res.render('view', { userData });
        });
    });
}

export function urade (req, res) {
    dbconnection().then(async function (client) {
      const productCollections = client
        .db("codegirls")
        .collection("products");
  
        await productCollections.deleteOne({_id:new ObjectId(req.params.id)}, (err, result) => {  if (err) throw err;
        if (result.acknowledged) {
          res.redirect("/view");
          // res.render("login");
        } else {
          res.redirect("/view");
        }
      });
    });
  };