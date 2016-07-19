/************
 * DATABASE *
 ************/

/* hard-coded data */

var  db = require('../models');

// GET /api/albums
function index(req, res) {
  // albums.find({}, function(err, success){

  db.Album.find({}, function(err, success){
    res.json(success);
  });

// });
}

function create(req, res) {
  // FILL ME IN !
  // console.log(req);
var genrearray =  req.body.genre.split(',');
var cleanedarray = genrearray.map(function(element){
        // element = $.trim(element);
        return element.trim();

});
console.log(cleanedarray);

// console.log(genrearray);
 var newAlbum = new db.Album({
   artistName: req.body.artistname,
   name: req.body.albumname,
   releaseDate: req.body.releasedate,
   genres: cleanedarray

 });


 newAlbum.save(function(err, success){
   if (err){
     res.sendStatus(500);
   }
   console.log('GET IT DONE HOMIE');
  //  res.json(success);
 });

}

function show(req, res) {
  // FILL ME IN !
}

function destroy(req, res) {
  // FILL ME IN !
}

function update(req, res) {
  // FILL ME IN !
}


// export public methods here
module.exports = {
  index: index,
  create: create,
  show: show,
  destroy: destroy,
  update: update
};
