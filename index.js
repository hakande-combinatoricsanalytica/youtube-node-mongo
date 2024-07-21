import mongoose from "mongoose";
import app from "./app.js"

( async ()=>{
    try {
        await mongoose.connect("mongodb://localhost:27017/gitcodespace")
        console.log("DB Connected!");

        const onListening=() =>{
            console.log("Listening on PORT 5000");
        }
        app.listen(5000,onListening)

    } catch (error) {
        console.error("error:",error);
        throw error;
    }
})()