const { Router } = require("express");
const router = Router();
const { getAllUsers, postUser, deleteFn, updateFn, getTodoById } = require("../controller/controllerFunctions");


router.get("/get", getAllUsers);
router.get("/todos/:id", getTodoById); // Add this route for fetching a single todo item
router.post("/post", postUser);
router.delete("/delete/:id", deleteFn);
router.put("/update/:id", updateFn);

module.exports = router;
