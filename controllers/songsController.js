var  db = require('../models');


function index(req, res){

}


function create(req, res){
  // var albumIdUsed=req.body.albumid;
  // var newSong = new songSchema({
  //     name:  req.body.songName,
  //     trackNumber: req.body.trackNumber
  // });
  //
  // newSong.save(function (err, success){
  //   if (err){
  //     console.log('Shit does not work!');
  //     res.sendStatus(500);
  //   }
  //   console.log("shit works!");
  //   res.json(success);
  // });
  //
  // db.Album.find({_id: albumIdUsed}, function(specificalbum){
  //   Album.songs.add{
  //     reference to song in SongDatabase
  //   }
  // }
}
//add song to a specific album






module.exports = {
   index: index,
   create: create
};
