const { Router } = require("express")
const router = Router()


router.get('/', (req, res)=>{
    const data = {
        "nombre": "Enrique",
        "website": "kikegal.com"
    }
    res.json(data)  
})

router.post('/', (req, res)=>{
    const data = (req.body) 

})



module.exports = router