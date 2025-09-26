const express = require("express");
const { getProjects, addProject, deleteProject } = require("../controllers/projectController");

const router = express.Router();

router.get("/", getProjects);
router.post("/", addProject);
router.delete("/:id", deleteProject);
module.exports = router;
