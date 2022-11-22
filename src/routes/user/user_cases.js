//routers 

const { Router } = require("express");
const router = Router();
const response = require("../../network/response");
const config = require("../../../config");
const db = config.api.db;

// router.get('/login',
// (req,res) =>{
//     let query = "SELECT * FROM user";
//     db.query(query, function (err, result) {      
//         if(err) throw err;
//         res.json(result[0]);
//     });
// });

router.post('/crear', async (req, res) => {
    const { message, name, subject } = req.body;
    console.log("message ", req.body);
    try {
        if (message && name && subject) {
            await db.collection("contacts").add({
                name,
                subject,
                message
            });
            response.success(res,{
                "message": "Created"
            }, 200)
            res.json(req.body);
        } else {
            response.error(res, {
                "message":"Missing parameters"
            },400)
        }
    } catch (err) {
        response.error(res,err)
    }
});


// router.delete('/:id',(req,res) =>{
//     const {id} = req.params;
//     underscore.each(db, (user,i) =>{

//         if(user.id == id){
//             db.splice(i,1);
//         }
//     });
//      res.send(db);
// });

module.exports = router;