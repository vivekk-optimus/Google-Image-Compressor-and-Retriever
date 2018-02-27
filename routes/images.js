const Scraper = require('images-scraper')
const google = new Scraper.Google();
const router = require('express').Router();
const Jimp = require('jimp');
const keywords = require('../models/keywords');

// Search keyword ->images->compression->save

router.post('/', (req, res, next)=>{
   
    let searchTerm = req.body.search;
    const kwords = new keywords({
        keyword: searchTerm
    });
    keywords.findOne({keyword: searchTerm}, function(err, key){
        if(err) throw err;
        else if(!key){
            kwords.save();
        }
    });
    

    google.list({
        keyword: searchTerm,
        num: 15,
        detail: true,
        nightmare: {
            show: false
        }
    })
    .then(function(images){
        
        images.forEach(function(image, index){
            
            let url = image.url;
            
            
            //compression
            Jimp.read(url,  function(err, img){

                if(err) throw err;
            if(img){  
                img.resize(256, 256)
                  .quality(60)
                  .greyscale()
                  .write("public/images/"+searchTerm+index+".jpg");
                 }
                 next();
            });
        });
        res.redirect('/list');
 
    }).catch(function(err){
        console.log('err', err);
    });
  });


module.exports = router;
