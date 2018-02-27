const router = require('express').Router();



router.get('/:keyword', (req,res)=>{
    const keyword = decodeURI(req.params.keyword);
    res.render('single', { key: keyword});

});

module.exports = router;