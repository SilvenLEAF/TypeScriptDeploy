import express from 'express';
import path from 'path'



// -------------------FIRING EXPRESS APP
const app = express();
app.use(express.json())
app.use(express.static(path.join(__dirname, `client/build`)));







/* ----------------------------------
.             routes
---------------------------------- */
app.get('*', (req, res, next)=>{
  res.sendFile(path.join(__dirname, `client/build/index.html`));  
})






// -------------------LISTEN
const PORT = process.env.PORT || 5000;
app.listen(PORT, ()=>{
  console.log(`Server is running on port ${ PORT }`);
})