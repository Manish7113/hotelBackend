const express = require("express");
const { protect } = require("../middleware/authMiddleware");
const { roleAuthorization } = require("../middleware/roleAuthentication");
const {
  createTable,
  updateTable,
  deleteTable,
  getAllTables,
  getById,
  getUnoccupiedTable,
} = require("../controllers/table");
const router = express.Router();

router.get("/", protect, roleAuthorization("admin", "user"), getAllTables);
router.get("/notOccupied", protect, roleAuthorization("admin", "user"), getUnoccupiedTable);
router.get("/:id", protect, roleAuthorization("admin"), getById);
router.post("/", protect, roleAuthorization("admin"), createTable);
router.put("/:id", protect, roleAuthorization("admin"), updateTable);
router.delete("/:id", protect, roleAuthorization("admin"), deleteTable);

module.exports = router;