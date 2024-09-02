// import관리 할거임
import "./db"
import "./models/Video"
import app from "./server";

const PORT = 4000;

app.listen(PORT,function(){
    console.log(`http://localhost:${PORT}`)
})