

const mongoose = require("mongoose")

const newsSchema= mongoose.Schema({
  email: {type: String,required: true },
}
)

const newsModel= mongoose.model("newsletter",newsSchema)

module.exports= {newsModel}