const router = require("express").Router();
const AuthRoutes = require("./Authentication");

router.use("/auth", AuthRoutes);

module.exports = router;
