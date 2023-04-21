//routers

const { Router } = require("express");
const router = Router();
const controller = require("./controller");
const instances = require("../../../config").firebaseStore;
const db = require("../../../config").db;


router.post('/crear', (req, res) => {
    controller.insertMessage(instances, db, (result) =>{
        res.json(result);
    }, req.body);
});



module.exports = router;