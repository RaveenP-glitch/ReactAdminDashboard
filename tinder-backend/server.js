import express from 'express'
import mongoose from 'mongoose'

//App Config
const app = express();
const port = process.env.PORT || 8001;
const connection_url = 'mongodb+srv://root:1234@cluster0.adohy.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';

//Middlewares

//DB Config
mongoose.connect(connection_url, {
    useNewUrlParser: true,
    useCreateIndex:true,
    useUnifiedTopology: true,
})

//API Endpoints
app.get('/', (req, res) => res.status(200).send("Hello Programmers!!!"));


//Listener
app.listen(port, () => console.log(`listening on localhost: ${port}`));

