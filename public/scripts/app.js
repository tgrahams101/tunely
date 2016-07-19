/* CLIENT-SIDE JS
 *
 * You may edit this file as you see fit.  Try to separate different components
 * into functions and objects as needed.
 *
 */





$(document).ready(function() {
  console.log('app.js loaded!');

$.get('api/albums').success(function(album){
    album.forEach(function(event){
      renderAlbum(event);
    });

});

$('#newAlbumForm').on('submit', function(event){
  var serializeddata = $('#newAlbumForm').serialize();
  console.log(serializeddata);


  $.ajax({

      method: "POST",
      url:'api/albums',
      data: serializeddata,
      success: onSuccess,
      error: onError
  });
    $('#newAlbumForm').trigger('reset');
  });
});


//
// var source = $('#album-template').html();
// var  template = Handlebars.compile(source);
//
// var albumsHtml = template();
// sampleAlbums.forEach(function(event){
// renderAlbum(event);
// });
// });

function onSuccess(json){

  renderAlbum(json);

}

function onError(json){
  console.log('Error');
}



// this function takes a single album and renders it to the page
function renderAlbum(album) {
    console.log(album);
  var source = $('#album-template').html();
  // console.log(source);
 var  template = Handlebars.compile(source);
  // console.log('rendering album:', album);
  var albumsHtml = template(album);
  $('#albums').append(albumsHtml);

}
