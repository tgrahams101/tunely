var  db = require('../models');


function index (req, res){

}


function create (req, res){
  var newSong = new songSchema({
      name:  req.body.songName,
      trackNumber: req.body.trackNumber
  });

  newSong.save(function (err, success){
    if (err){
      console.log('Shit does not work!');
    }
    res.json(success);
  });
}






module.exports = {
   index: index,
   create: create,
};
