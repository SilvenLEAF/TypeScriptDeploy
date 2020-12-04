import express from 'express';
import path from 'path'



// -------------------FIRING EXPRESS APP
const app = express();
app.use(express.json())
app.use(express.static(path.join(__dirname, `client/build`)));







// -------------------LISTEN
const PORT = process.env.PORT || 5000;
app.listen(PORT, ()=>{
  console.log(`Server is running on port ${ PORT }`);
})