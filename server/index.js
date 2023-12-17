import mongoose from 'mongoose';
import express from 'express';
import dotenv from 'dotenv';
dotenv.config()

const app = express();
app.use(express.json());

const connectDB = async () => {
    const connection = await mongoose.connect(process.env.MONGODB_URI)
    if(connection)
    {
        console.log("MONGODB connect successfully")
    }
}

app.get('/api/bookings',(req , res) => {
    res.json({
        success: true,
        data : [],
        message : "Booking is done"
    })
})

const PORT = process.env.PORT || 5000;

app.listen(PORT , () => {
    console.log(`server is running on port ${PORT}`)
    connectDB()
})