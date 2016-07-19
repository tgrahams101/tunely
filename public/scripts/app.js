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

      $('#albums').on('click', '.add-song' , function(event){

        console.log('add-song clicked!');
        var id= $(this).closest('.album').data('album-id'); // "5665ff1678209c64e51b4e7b"
        console.log('id',id);
        $('#songModal').data('album-id', id);
        $('#songModal').modal();
        $('#savesong').on('click', function(event){

        });


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

  //WHY DOES THE CONSOLE.LOG(ALBUM) HERE WORK BUT CONSOLE LOGGINT IT FROM THE ONSUCCESS function
  // CONSOLE.LOG(JSON) ABOVE DOES NOT WORK
    console.log(album);
  var source = $('#album-template').html();
  // console.log(source);
 var  template = Handlebars.compile(source);
  // console.log('rendering album:', album);
  var albumsHtml = template(album);
  $('#albums').append(albumsHtml);

}
