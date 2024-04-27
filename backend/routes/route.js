const { Router } = require("express");
const router = Router();
const {
  getAllUsers,
  postUser,
  deleteFn,
  updateFn,
} = require("../controller/controllerFunctions");

router.get("/get", getAllUsers);
router.post("/post", postUser);
router.delete("/delete/:id", deleteFn);
router.put("/update/:id", updateFn);

module.exports = router;
