const express = require("express");
const clients = require("../controllers/client.js");

const router = express.Router();

router.get("/topics", clients.getAll);
router.post("/create", clients.createOne);
router.put("/update", clients.update);
router.delete("/delete", clients.delete);

module.exports = router;
