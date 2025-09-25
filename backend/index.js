import express from "express";
import dotenv from "dotenv";
import cors from "cors";

const app = express();

app.use(cors());
app.use(express.json());

dotenv.config();

const PORT = process.env.PORT || 3000;


app.get("/home",(req,res,next) => {
  res.json({ message : "hello shubham from backend"})


})

app.get("/",(req,res,next) =>{
  res.send({
    activestatus:true,
    error:false,
  })

})

app.use((req,res,next) => {
  res.status(404).send({error: "unauthorised excess"})
})



app.listen(PORT, () => {
   console.log(`server running on http://localhost:${PORT}`)
})