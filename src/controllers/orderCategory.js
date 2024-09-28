const OrderCategory = require('../models/orderCategory');


exports.createCategory = async(req, res, next)=>{
    try{
        const {category,isActive} = req.body;
        if(!category)
        {
            return res.status(201).json({
                message : 'category is required'
            });

        }
        const createCategory = await OrderCategory.create(req.body);
        res.status(201).json(createCategory)


    }
    catch(error)
    {
        res.status(400).json({
            message : error.message
        })
    }
}