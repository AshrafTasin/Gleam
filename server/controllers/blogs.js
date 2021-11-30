import Blogs from '../models/blogs.js';
import path from 'path';
import fs from 'fs';



export const getBlogs = async (req,res)=> {
   try{
    const blogs = await Blogs.find();
 
    res.status(200).json(blogs);

   }catch (error) {
    
    res.status(404).json({ message : error.message });

   }
};

export const getSingleBlog = async(req,res) => {
        try {
          const blog = await Blogs.findById(req.params.id);
          console.log("Post Pawa gsssese");
          res.status(200).json(blog);
        } catch (err) {
          res.status(500).json(err);
        }
};

export const createBlogs = async (req,res) => {
    const blog = req.body;

    const newBlog = new Blogs(blog);

    try {
        await newBlog.save();

        res.status(201).json(newBlog);

    } catch (error) {
        
        res.status(409).json({message : error.message});
    }
};

export const blogImage = (req,res) => {
      let tempFile = req.files.upload;
      let tempPathFile = tempFile.path;
      const __dirname = path.resolve();
      
      const targetPathUrl = path.join(__dirname,"./images/"+tempFile.name);

      if(path.extname(tempFile.originalFilename).toLowerCase() === ".png" || ".jpg"){
        fs.rename(tempPathFile,targetPathUrl,err =>{
          res.status(200).json({
            uploaded : true,
            url : `http://localhost:5000/blogs/images/${tempFile.originalFilename}`
          })
          if(err){
            return console.log(err);
          }
        })
      }
}

export const getBlogImage = (req,res) => {
    res.download('./images/'+req.params.id);
}

export const deleteBlog = async (req, res) => {
    console.log(req.body);
  try {
    const blog = await Blogs.findById(req.params.id);
    // if (blog.author === req.body.username) {
      try {
        await blog.delete();
        res.status(200).json("Post has been deleted...");
      } catch (err) {
        res.status(500).json(err);
      }
    // } else {
    //   res.status(401).json("You can delete only your post!");
    // }
  } catch (err) {
    res.status(500).json(err);
  }
}