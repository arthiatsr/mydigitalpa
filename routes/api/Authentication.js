const router = require("express").Router();
const authController = require("../../controllers/authController");

// Matches with "/api/auth"
router.route("/")
  .post(authController.create);

// Matches with "/api/auth/:email/:password"
router
  .route("/:email/:password")
  .get(authController.find)

module.exports = router;