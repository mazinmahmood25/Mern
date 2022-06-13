import mongoose from "mongoose";

const itemSchema = new mongoose.Schema({
    "name": {
      "type": "String"
    },
    "price": {
      "type": "Number"
    }
  })

  const itemDb = mongoose.model("products" , productSchema);

  export {itemDb};