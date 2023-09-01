const express = require('express');
const mongoose = require('mongoose');
const app = express();
const{HOST, PORT, API_PATH, DB_HOST, USERNAME,PASSWORD} = require("./variables");
const bodyParser = require('body-parser');

/* app.listen(PORT, () => console.log(`Active port ${PORT}`));

console.log(`http://${HOST}:${PORT}${API_PATH}`); */
console.log(`mongodb+srv://${USERNAME}:${PASSWORD}@${DB_HOST}`);
mongoose.connect(`mongodb+srv://${USERNAME}:${PASSWORD}@${DB_HOST}` ,{
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() =>{
    console.log('Connected to MongoDB');
    app.listen(PORT, () => console.log(`Active port ${PORT}`));
})
.catch((err) => console.error(err));

/* Habilitar middleware para request a db */
app.use(bodyParser.json());
app.use("/", (req, res) => {
    /* http://localhost:3000/api/v1 */
    res.send("Hola al dashboard");
})
