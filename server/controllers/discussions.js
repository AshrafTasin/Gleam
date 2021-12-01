import DiscussionProto from '../models/discussionProto.js';


export const getDisc = async (req,res)=> {
   try{

    const Discussion = await DiscussionProto.find();
    console.log(" getDISC >> "+Discussion);
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

export const getSingleDisc = async(req,res) => {
    try {
      const disc = await DiscussionProto.findById(req.params.id);
      res.status(200).json(disc);
      console.log(" disc in controller ");
    } catch (err) {
      res.status(500).json(err);
    }
};



export const discImage = (req,res) => {
    let tempFile = req.files.upload;
    let tempPathFile = tempFile.path;
    const __dirname = path.resolve();
    
    const targetPathUrl = path.join(__dirname,"./images/"+tempFile.name);

    if(path.extname(tempFile.originalFilename).toLowerCase() === ".png" || ".jpg"){
      fs.rename(tempPathFile,targetPathUrl,err =>{
        res.status(200).json({
          uploaded : true,
          url : `http://localhost:5000/discussion/images/${tempFile.originalFilename}`
        })
        if(err){
          return console.log(err);
        }
      })
    }
}

export const getDiscImage = (req,res) => {
  res.download('./images/'+req.params.id);
}

export const deleteDisc = async (req, res) => {
  console.log(req.body);
try {
  const disc = await DiscussionProto.findById(req.params.id);
  // if (blog.author === req.body.username) {
    try {
      await disc.delete();
      res.status(200).json("Disc dlt...");
    } catch (err) {
      res.status(500).json(err);
    }
  
} catch (err) {
  res.status(500).json(err);
}
}

export const updateDisc = async (req,res) => {
  const id  = req.params.id;
  console.log(id);
  console.log(req.body);
  const { createdAt,tags,likeCount,author, title, body, _id,_v } = req.body;
  
  // if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No post with id: ${id}`);

  const updatedDisc = { createdAt,tags,likeCount,author, title, body, _id: id,_v };

  try {
        await DiscussionProto.findByIdAndUpdate(id, updatedDisc, { new: true });
        // res.status(201).json(newBlog);

      } catch (error) {
      
      res.status(409).json({message : error.message});
  }

  console.log(updatedDisc);
  res.json(updatedDisc);
}