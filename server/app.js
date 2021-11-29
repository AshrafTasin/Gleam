import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';

<<<<<<< HEAD
import postRoutes from './routes/posts.js';
import userRoutes from './routes/users.js';
=======
import blogRoutes from './routes/blogs.js';
import userRoutes from './routes/users.js';
import discRoutes from './routes/discs.js';
>>>>>>> discuss works

const app = express();

app.use(express.json({ limit: "100mb", extended: true}));
app.use(express.urlencoded({ limit: "100mb", extended: true}));
app.options('*', cors());
app.use(cors());

<<<<<<< HEAD
app.use('/posts',postRoutes);
app.use('/users',userRoutes);
=======
app.use('/blogs',blogRoutes);
app.use('/users',userRoutes);
app.use('/discussion',discRoutes);
>>>>>>> discuss works

dotenv.config({path: './config.env'});

const CONNECTION_URL = process.env.DATABASE;
const PORT = process.env.PORT;

mongoose.connect(CONNECTION_URL,{
    useNewUrlParser: true, 
    useUnifiedTopology: true
}).then(() => app.listen(PORT, () => console.log(`server running on PORT ${PORT}`)))
  .catch((error) => console.log(error.message) );

mongoose.set('useFindAndModify',false);