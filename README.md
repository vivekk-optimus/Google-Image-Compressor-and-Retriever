# Google Image Compressor and Retriever

ZILLION.io Task

"Build a NodeJs Server side Web app containing 3 pages which would scrape images from google
search and store it in your server:

1- A page containing an input field and a submit button to Fetch images from google and save top 15
images after passing through a compression algorithm then pass it through a black and white filter
and upload all the images to a particular location(Amazon S3 or local HDD).

2- A page which lists all the keywords searched before by the user.

3- After clicking on any word on the listing page open up another page which will have all the images
for that particular keyword, but this time the images should be loaded from the location/path on
which you saved those images.


# Libraries Used
1.express
2.cors
3.morgan
4.body-parser
5.mongoose
6.path
7.images-scraper
8.Jimp

# How to run: 
To run locally 
use nodemon or npm start

#Location of Image Save:
 /public/images/

