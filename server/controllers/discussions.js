import DiscussionProto from '../models/discussionProto.js';


export const getDisc = async (req,res)=> {
   try{

    const Discussion = await DiscussionProto.find();
 
    res.status(200).json(Discussion);

   }catch (error) {
    
    res.status(404).json({ message : error.message });

   }
};
 
export const createDiscs = async (req,res) => {

    const disc = req.body;
    const newDisc = new DiscussionProto(disc);

    try {
        await newDisc.save();
        res.status(201).json(newDisc);
    } catch (error) {
        
        res.status(409).json({message : error.message});
    }
};