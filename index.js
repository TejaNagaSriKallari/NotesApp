import express from 'express'
import cors from 'cors'
import connectToMongoDB from './db/db.js'
import authRouter from './routes/auth.js'  
import noteRouter from './routes/note.js'
const app=express()
//const co=require('cors');
app.use(cors())
//app.use(cors({ origin: "http://localhost:5173", credentials: true }));
app.use(express.json())
app.use('/api/auth',authRouter)
app.use('/api/note',noteRouter)
app.listen(5000,()=>{
    connectToMongoDB()
    console.log("Server is running")
})