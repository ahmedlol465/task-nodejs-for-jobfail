
import categoriesModel from '../../../DB/models/categories.model.js';





// =====================  delete  =================
export const deleteCategory= async (req, res, next) => {
    const { id } = req.query
    const { _id } = req.authUser



    // find user by id and update 
    const findCategoryAndDelete = await categoriesModel.findByIdAndDelete({_id: id ,addedBy: _id});
    if(!findCategoryAndDelete) return next (new Error("faild delete please try agein", { cause: 404 }))
    return res.status(200).json({message: "deleted Done"})
    
}


//==================  get user date ===========
export const getCategory = async (req, res, next) => {
    const { id } = req.query
    const { _id } = req.authUser

   
    const findUser = await categoriesModel.findById({_id: id ,addedBy: _id});
    if(!findUser) return next (new Error("faild get error", { cause: 404 }))
    return res.status(200).json({message: "the data", findUser})
}




export const updateCategory = async (req, res, next) => {
    const { name, id } = req.body
    const { _id } = req.authUser 
    const update = await categoriesModel.findOneAndUpdate({_id: id ,addedBy: _id}, { name }, { new: true })
    if (!update) return next(new Error('faild update please try agein', { cause: 404 }))
    
    return res.status(200).json({ message: 'done', update })
}


export const addCategory = async (req, res, next) => {
    const { name } = req.body
    const { _id } = req.authUser


    const newTask = categoriesModel.create({ name, addedBy: _id })
    if (!newTask) return next(new Error('faild added please try agein', { cause: 404 }))
    return res.status(200).json({ message: 'done', newTask })

}
