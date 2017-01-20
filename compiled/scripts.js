jQuery(function ($) {

//var audio = new Audio('music/horse.ogg');
//var audio = 0;

var index=0,
    playing=false,
    mediaPath='music/',
    extension='.ogg',
    tracks = [{ 
                "track": 1,
                "name": "All This Is - Joe L.'s Studio",
                "length": "00:01",
                "file": "horse",
                "extension": ".ogg"
            },
            { 
                "track": 2,
                "name": "All This Is - Judio",
                "length": "00:01",
                "file": "horse",
                "extension": ".ogg"
            }],
    trackCount = tracks.length,
    npTitle = $('#npTitle')
    audio = $("#audio1").bind('play', function(){
       playing=true;
   }).bind('pause', function(){
      playing=false;
   }).bind('ended', function(){
      console.log("kovi");
      if((index + 1) < trackCount){
         index++;
         loadTrack(index);
         audio.play();
      } else {
         audio.pause();
         index = 0;
         loadTrack(index);
      }
   }).get(0),
   btnPrev = $('#btnPrev').click(function(){
      if((index - 1) > -1){
         index--;
         loadTrack(index);
         if (playing){
            audio.play();
         }
      } else{
         audio.pause();
         index = 0;
         loadTrack(index);
      }
   }),
   btnNext = $('#btnNext').click(function(){
      if((index + 1) < trackCount){
         index++;
         loadTrack(index);
         if (playing){
            audio.play();
         } else {
            audio.pause();
            index = 0;
            loadTrack(index);
         }
      }
   }),
      loadTrack = function (id){
      npTitle.text(tracks[id].name);
      index = id;
      audio.src=mediaPath + tracks[id].file + tracks[id].extension;
   },
      playTrack = function (id){
      loadTrack(id);
      audio.play();
   };
   loadTrack(index);
});
