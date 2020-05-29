


 // 2. This code loads the IFrame Player API code asynchronously.
      var tag = document.createElement('script');

      tag.src = "https://www.youtube.com/iframe_api";
      var firstScriptTag = document.getElementsByTagName('script')[0];
      firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

      // 3. This function creates an <iframe> (and YouTube player)
      //    after the API code downloads.
      var player;
      function onYouTubeIframeAPIReady() {
        player = new YT.Player('player', {
          height: '295',
          width: '640',
          videoId: 'M7lc1UVf-VE',
		  playerVars:
		  {
			  'controls':0,
			  'modestbranding':0,
			  'rel':0,
			  'showinfo':0
		  },
          events: {
            'onReady': onPlayerReady,
            'onStateChange': onPlayerStateChange
          }
        });
      }
	  
	  
	  

      // 4. The API will call this function when the video player is ready.
      function onPlayerReady(event) {
        event.target.playVideo();
		
	
		$('#btn').click(function (){
		player.playVideo();
		});
		$('#btn_puse').click(function (){
		player.pauseVideo();
		});
		
      }








      // 5. The API calls this function when the player's state changes.
      //    The function indicates that when playing a video (state=1),
      //    the player should play for six seconds and then stop.
     
      function onPlayerStateChange(event) {
        if (event.data == YT.PlayerState.PLAYING) {
          
		  
//This api calling for making video player full size 2
		var query = document.querySelector.bind(document);
		
query('#plarFullscreen').addEventListener ('click',function (){
											   

  player.playVideo();//won't work on mobile
	var playerElement = query('#player');
  var requestFullScreen = playerElement.requestFullScreen || playerElement.mozRequestFullScreen || playerElement.webkitRequestFullScreen;
  if (requestFullScreen) {
    requestFullScreen.bind(playerElement)();
  }	  
  
});
      
//This api calling for making video player full size 2



//This is the api for seekbar progress bar 3
$('#seekbar').on('mouseup touchend', function (e) {

    // Calculate the new time for the video.
    // new time in seconds = total duration in seconds * ( value of range input / 100 )
    var newTime = player.getDuration() * (e.target.value / 100);

    // Skip video to new time.
    player.seekTo(newTime);

});

// This function is called by initialize()
function updateProgressBar(){
    // Update the value of our progress bar accordingly.
    $('#seekbar').val((player.getCurrentTime() / player.getDuration()) * 100);
}

//end This is the api for seekbar progress bar 3






		 
		 
		
		  
		}//    YT.PlayerState.playing cerlibraces.
		}//    OnPlayerStateChange cerlibraces.
     




$('.anchors').click(function() {
    var id = $(this).attr('id');
     player.loadVideoById(id);
});

