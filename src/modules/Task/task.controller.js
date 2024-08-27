// import bcrypt from 'bcrypt'
// import Jwt  from 'jsonwebtoken';
// import User from "../../../DB/models/user.model.js";
// import sendEmailService from "../services/send-email.service.js"
// import generateUniqueString from '../../uitils/generateUniqeString.js';
// import { customAlphabet, nanoid } from 'nanoid';
import { APIFeatures } from '../../../../src/uitils/api-features.js';
import categoriesModel from '../../../DB/models/categories.model.js';
import taskModel from '../../../DB/models/task.mode.js';






// =====================  delete  =================
export const deleteTask= async (req, res, next) => {
    const { _id } = req.authUser
    const { id } = req.query



    // find user by id and update 
    const findUserAndUpdate = await taskModel.findByIdAndDelete({userId: _id, _id: id});
    if(!findUserAndUpdate) return next (new Error("faild delete please try agein", { cause: 404 }))
    return res.status(200).json({message: "deleted Done"})
    
}


//==================  get user date ===========
export const getTask = async (req, res, next) => {
    const { _id } = req.authUser
    const  { id } = req.query

   
    const findUser = await taskModel.findOne({_id: id ,userId: _id});
    if(!findUser) return next (new Error("faild get error", { cause: 404 }))
    return res.status(200).json({message: "the data", findUser})
}




export const updateTask = async (req, res, next) => {
    const { title, description } = req.body
    const { _id } = req.authUser
    const { id } = req.query
    const update = await taskModel.findOneAndUpdate({_id: id ,userId: _id}, { title, description }, { new: true })
    if (!update) return next(new Error('faild update please try agein', { cause: 404 }))
    
        return res.status(200).json({ message: 'done', update })
    }


export const addTask = async (req, res, next) => {
    const { title, description, categoryId} = req.body
    const { _id } = req.authUser
    const IsCategoryFoundInUser = await categoriesModel.findOne({_id: categoryId ,addedBy: _id });
    if (!IsCategoryFoundInUser) return next(new Error('faild update ', { cause: 404 }))
    const newTask =  await taskModel.create({ title, description, userId: _id, categoryId})
    if (!newTask) return next(new Error('faild added please try agein', { cause: 404 }))
    return res.status(200).json({ message: 'done', task: newTask })

}

// ================  task  =================
export const getAllTaskByPagination = async(req,res,next) => {
    const { page, size, sort, ...query } = req.query  
  
    const features = new APIFeatures(req.query, taskModel.find()).pagination({page, size})
  
    const tasks = await features.mongooseQuery  
  
  
    res.status(200).json({message: "the product", data: tasks})
  }
  


  
// ================  task  =================
export const getAllTaskByFilter = async(req,res,next) => {
    const { page, size, sort, ...query } = req.query  

    const tasks = new APIFeatures(req.query , taskModel.find()).filter(query) 
  
  
    res.status(200).json({message: "the product", data: tasks})
  }
  



export const getAllTaskBySerch = async (req, res, next) => {
    const { page, size, sort, ...query } = req.query  

    const features = new APIFeatures(req.query, taskModel.find()).search(query)
  
  
    const tasks = await features.mongooseQuery  
  
  
  
    res.status(200).json({message: "the tasks", data: tasks})
  }