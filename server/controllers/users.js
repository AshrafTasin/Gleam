import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

import User from '../models/user.js';

export const signIn = async (req,res) => {

    const {email,password} = req.body;
    
    try {
        console.log("1");
        const existingUser = await User.findOne({ email });
        console.log("2");

        if(!existingUser){
            return res.status(404).json({message: "User Doesn't Exist!"});
        }
        console.log("3");
        const passwordMatch = await bcrypt.compare(password,existingUser.password);
        console.log("4");
        if(!passwordMatch){
            return res.status(400).json({message:"Invalid Credentials"});
        }
        console.log("5");
        const token = jwt.sign({
            email : existingUser.email,
            id: existingUser._id },
            'secretString',{
                expiresIn : "1h"
            }
        );

        res.status(200).json({ result: existingUser,token});

    } catch (error) {
        res.status(500).json({ message: "Something Went Wrong!" });
    }
};

export const signUp = async (req,res) => {
    
    const {email,password,confirmPassword,firstName,lastName} = req.body;

    //console.log(`${password} ${confirmPassword}`);

    try {
        console.log("1");
        const existingUser = await User.findOne({email});
        console.log("2");

        if(existingUser){
            return res.status(400).json({message: "User Already Exists!"});
        }
        console.log("3");

        if(password !== confirmPassword ) {
            return res.status(400).json({message: "Passwords don't match"});
        }   

        console.log("4");

        const hashedPassword = await bcrypt.hash(password,12);

        console.log("5");
        const result = await User.create({
            email,
            password: hashedPassword,
            firstName,
            lastName
        });
        console.log("6");
        const token = jwt.sign({
            email : result.email,
            id: result._id },
            'secretString',{
                expiresIn : "1h"
            }
        );

        res.status(200).json({ result: result,token});

    } catch (error) {
        res.status(500).json({ message: "Something Went Wrong!" });
    }
};

export const updatedUser = async(req,res) => {
    const {id,firstName,lastName,email,password,about} = req.body;

    try {
        
        // if(password !== confirmPassword ) {
        //     return res.status(400).json({message: "Passwords don't match"});
        // }

        const hashedPassword = await bcrypt.hash(password,12);
        
        console.log(req.body);
        
        const result = await User.findByIdAndUpdate(req.params.id,
            {
              $set: {_id:id,firstName:firstName,lastName:lastName,email:email,password:hashedPassword,about:about},
            },
            { new: true });

        // const token = jwt.sign({
        //     email : result.email,
        //     id: result._id },
        //     'secretString',{
        //         expiresIn : "1h"
        //     }
        // );
        console.log(result);
        res.status(200).json({ result: result});

    } catch (error) {
        res.status(500).json({ message: "Something Went Wrong!" });
    }
};