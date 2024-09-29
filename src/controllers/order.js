const Order  =  require('../models/order');
const Table = require('../models/table')

exports.createOrder = async (req, res) => {
    try{
    const updateTable = await Table.findByIdAndUpdate(req.body.table, {isOccupied : true}) ;
    const order = await Order.create(req.body);

    console.log(updateTable , 'table updated successfully')
    if(order) {
        const updateTabel  = await Table.findByIdAndUpdate(order.table, {currentOrder : order._id})
        console.log(updateTabel , 'table updated successfully 2')

    }
    return res.status(201).json(order);

    }
    catch(error){   
        return res.status(500).send(error);
    }
}

exports.getCompletedOrders = async (req, res) => {
    try {
        const orders = await Order.find({billPaid : true}).populate("table").populate("items.item");
        if(!orders.length){
            return res.status(200).json({message : 'No Orders Available'});
        }
        return res.status(200).json(orders);
    } catch (error) {
       return res.status(500).json({ message: error.message });
    }
}
exports.getAllOrders = async (req, res) => {
    try {
        const orders = await Order.find().populate("table").populate("items.item");
        if(!orders.length){
            return res.status(200).json({message : 'No Orders Available'});
        }
        return res.status(200).json(orders);
    } catch (error) {
       return res.status(500).json({ message: error.message });
    }
}

exports.getOrderById = async (req, res) => {
    try {
        const order = await Order.findById(req.params.id).populate("table").populate("items.item");
        if(!order) {
            return res.status(404).json({ message: 'Order not found' });
          }
       return res.status(200).json(order);
    } catch (error) {
       return res.status(500).json({ message: error.message });
    }
}

exports.deleteOrder = async (req, res) => {
    try {
        const order = await Order.findByIdAndDelete(req.params.id);
        const updateTable = await Table.findByIdAndUpdate(order.table, {isOccupied : false,currentOrder : null}) ;
        console.log(updateTable , 'table updated successfully')
        if(!order) {
            return res.status(404).json({ message: 'Order not found' });
          }
        res.status(200).json(order);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
} 

exports.updateOrder = async (req, res) => {
    try {
        const order = await Order.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
            runValidators: true,
          });
          if(!order) {
            return res.status(404).json({ message: 'Order not found' });
          }
          if(order?.billPaid){
        const updateTable = await Table.findByIdAndUpdate(order.table, {isOccupied : false,currentOrder : null}) ;

          }
        res.status(200).json(order);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

