import Comment from "../models/comment.js";

export const createComment = async (req,res) => {

    const comment = req.body;
    const newComment = new Comment(comment);

    try {
        await newComment.save();
        res.status(201).json(newComment);

    } catch (error) {
        res.status(409).json({message : error.message});
    }
};
export const getComments = async (req,res)=> {
    
    try{
     const Comments = await Comment.find();
     res.status(200).json(Comments);
     console.log("Controllers work "+Comments)
    }
    catch (error) {
     res.status(404).json({ message : error.message });
    }
 };