const router = require("express").Router();

router.use("/", (req, res) => {
    res.send("<h1>Projects Route!</h1>")
});

module.exports = router;
