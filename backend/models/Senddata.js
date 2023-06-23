const { model, Schema } = require("mongoose");
const mongoose = require("mongoose");

const DataSchema = new Schema({
     userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    name: { type: String },
    work: { type: String },
   
    
})

const Data = model("Data", DataSchema);

module.exports = Data;     