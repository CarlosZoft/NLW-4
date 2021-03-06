import {Request, Response} from "express";
import { getRepository } from "typeorm";
import {User} from "../models/user";
 

 class userController {
     
    async create(req: Request, res: Response){
       var {name,email} = req.body;
       const usersRepository = getRepository(User);
       const userAlreadyExists = await usersRepository.findOne({
            email
       });
       if(userAlreadyExists){
           return res.status(400).json({
               error: "User Already exists, try another email"
           })
       }

       const user =  usersRepository.create({
            name,
            email
       });

       await usersRepository.save(user);
       res.send(user);
    }
 }

 export {userController};