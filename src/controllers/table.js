const TableSchema = require("../models/table");

exports.createTable = async (req, res) => {
  try {
    const table = await TableSchema.create(req.body);
    return res.status(201).json(table);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

exports.updateTable = async (req, res) => {
  try {
    const table = await TableSchema.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    if (!table) {
      return res.status(404).json({ message: "Table not found" });
    }
   return res.status(200).json(table);
  } catch (error) {
   return res.status(500).json({
      message: error.message,
    });
  }
};

exports.deleteTable = async (req, res) => {
  try {
    const table = await TableSchema.findByIdAndDelete(req.params.id);
    if (!table) {
      return res.status(404).json({ message: "Table not found" });
    }
   return  res.status(200).json(table);
  } catch (error) {
    return res.status(500).json({
      message: error.message,
    });
  }
};

exports.getAllTables = async (req, res) => {
  try {
    const tables = await TableSchema.find();
    return res.status(200).json(tables);
  } catch (error) {
    return res.status(500).json({
      message: error.message,
    });
  }
};

exports.getById = async (req, res) => {
  try {
    const table = await TableSchema.findById(req.params.id);
    if (!table) {
      return res.status(404).json({ message: "Table not found" });
    }
   return  res.status(201).json(table);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

exports.getUnoccupiedTable = async(req, res) =>{
  try{
    const unOccupiedTables = await TableSchema.find({isOccupied : false})
    if(!unOccupiedTables.length)
    {
      return res.status(201).json({message : 'No tables Avaiable'})

    }
    return res.status(200).json(unOccupiedTables)
  }
  catch(error)
  {
    return res.status(500).json({message : error.message})
  }
}