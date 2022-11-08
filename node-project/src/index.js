const env = require("dotenv");
env.config();
const app = require("./server.js");

app.listen(process.env.PORT,()=>{
    console.log(`Server is listening on http://localhost:${process.env.PORT}`);
});