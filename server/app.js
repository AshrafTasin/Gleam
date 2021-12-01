import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
import postRoutes from './routes/posts.js';
import userRoutes from './routes/users.js';
=======
import blogRoutes from './routes/blogs.js';
import userRoutes from './routes/users.js';
import discRoutes from './routes/discs.js';
>>>>>>> discuss works
=======
import blogRoutes from './routes/blogs.js';
import userRoutes from './routes/users.js';
import discRoutes from './routes/discs.js';
import commRoutes from './routes/comment.js';

>>>>>>> comment
=======
import blogRoutes from './routes/blogs.js';
import userRoutes from './routes/users.js';
import discRoutes from './routes/discs.js';
<<<<<<< HEAD
>>>>>>> DiscussionWOrks
=======
import commRoutes from './routes/comment.js';

>>>>>>> blog/disc !

const app = express();

app.use(express.json({ limit: "100mb", extended: true}));
app.use(express.urlencoded({ limit: "100mb", extended: true}));
app.options('*', cors());

app.use(cors({
  origin:"http://localhost:3000",
}));


<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
app.use('/posts',postRoutes);
app.use('/users',userRoutes);
=======
app.use('/blogs',blogRoutes);
app.use('/users',userRoutes);
app.use('/discussion',discRoutes);
>>>>>>> discuss works
=======
app.use('/blogs',blogRoutes);
app.use('/users',userRoutes);
app.use('/discussion',discRoutes);
app.use('/comment',commRoutes);
<<<<<<< HEAD
>>>>>>> comment
=======
app.use('/blogs',blogRoutes);
app.use('/users',userRoutes);
app.use('/discussion',discRoutes);
>>>>>>> DiscussionWOrks
=======
>>>>>>> blog/disc !

dotenv.config({path: './config.env'});

const CONNECTION_URL = process.env.DATABASE;
const PORT = process.env.PORT;

mongoose.connect(CONNECTION_URL,{
    useNewUrlParser: true, 
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
    useUnifiedTopology: true
=======
    useUnifiedTopology: true,
>>>>>>> comment
=======
    useUnifiedTopology: true
>>>>>>> DiscussionWOrks
=======
    useUnifiedTopology: true,
>>>>>>> blog/disc !
}).then(() => app.listen(PORT, () => console.log(`server running on PORT ${PORT}`)))
  .catch((error) => console.log(error.message) );

mongoose.set('useFindAndModify',false);