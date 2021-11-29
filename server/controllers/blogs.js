import BlogMessage from '../models/blogMessage.js';


export const getBlogs = async (req,res)=> {
   try{

    const blogMessages = await BlogMessage.find();
 
    res.status(200).json(blogMessages);

   }catch (error) {
    
    res.status(404).json({ message : error.message });

   }
};

export const getSingleBlog = async(req,res) => {
        try {
          const blog = await BlogMessage.findById(req.params.id);
          console.log("Post Pawa gsssese");
          res.status(200).json(blog);
        } catch (err) {
          res.status(500).json(err);
        }
};

export const createBlogs = async (req,res) => {
    const blog = req.body;

    const newBlog = new BlogMessage(blog);

    try {
        await newBlog.save();

        res.status(201).json(newBlog);

    } catch (error) {
        
        res.status(409).json({message : error.message});
    }
};

