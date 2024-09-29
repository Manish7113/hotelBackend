const mongoose = require("mongoose");
const TableSchema = new mongoose.Schema(
  {
    tableNumber: { type: String, required: true, unique: true, trim: true },
    tableCapacity: { type: Number, required: true },
    isOccupied: { type: Boolean, default: false },
    currentOrder : {type : String, default : null, unique : false},
  },
  { timestamps: true }
);

module.exports = mongoose.model("Table", TableSchema);