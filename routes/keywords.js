const router = require('express').Router();
const keywords = require('../models/keywords');

router.get('/', (req,res)=>{
    let keys = [];
    keywords.find({}, function(err, kwords){
        if(err) throw err;
        kwords.forEach(function(key){
            console.log(key.keyword);
            keys.push(key.keyword);
        });
        res.render('list.ejs', { keywords: keys });
    });
    

});
module.exports = router;