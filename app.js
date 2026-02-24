require("dotenv").config();

const express=require("express");
const path=require("path");
const mongoose=require("mongoose");
const cookieParser=require("cookie-parser");
const {checkForAuthenticationCookie}=require('./middlewares/authentication')

const app=express();
const PORT=process.env.PORT || 8000;
app.use(express.urlencoded({extended:true}))
app.use(cookieParser());
app.use(checkForAuthenticationCookie("token"));
app.use(express.static(path.resolve('./public')));


const Blog=require("./models/blog");
const userRoute=require("./routes/user");
const blogRoute=require("./routes/blog");


mongoose.connect(process.env.MONGO_URL)
.then(()=>console.log("mongoose connected succesfully"))
.catch((err)=>console.log(`some error ${err}`));

app.set("view engine","ejs");
app.set("views",path.resolve("./views"));
app.use("/user",userRoute);
app.use("/blog",blogRoute);

app.get("/",async (req,res)=>{
    const allBlogs=(await Blog.find({}));
    return res.render("home",{user:req.user,blogs:allBlogs});
})

app.listen(PORT,()=>{
    console.log(`server started at port ${PORT}`);
})