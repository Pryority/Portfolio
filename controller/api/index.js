const router = require("express").Router();

const projectsRoute = require("./projects-route");

router.use("/projects", projectsRoute);

module.exports = router;
