import mongoose, {Connection} from "mongoose";


let connected:Connection | boolean = false;

const connectDB =async () => {
    if(connected){
        console.log("already connected")
        return connected;
    }
    try {
       let res = await mongoose.connect(process.env.MONGO_URL!)
       connected = res.connection;
       console.log("MONGO DB connected")
       return connected;
    } catch (error) {
        console.log("Something went wrong")
    }
}
export default connectDB;