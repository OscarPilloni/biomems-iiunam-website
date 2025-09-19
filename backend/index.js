const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());

app.get("/api/hello", (req,res) => {
    res.json({message: "Hola desde el backend"});
});

app.listen(3000, () =>{
    console.log("Servidor en http://localhost:3000")
})