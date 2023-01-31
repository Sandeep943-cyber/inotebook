const mongoose=require('mongoose');
mongoose.set("strictQuery", false);
const mongoURI="mongodb+srv://Sandeep943:Iw%40nttodrink1234@cluster0.q3k33xd.mongodb.net/test"

const connectToMongo=()=>{
    mongoose.connect(mongoURI,()=>{
        console.log("Connected to mongo succesfully");
    })
}

module.exports=connectToMongo;