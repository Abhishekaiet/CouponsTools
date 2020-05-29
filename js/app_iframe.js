var tag = document.createElement('script');

      tag.src = "https://www.youtube.com/iframe_api";
      var firstScriptTag = document.getElementsByTagName('script')[0];
      firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);


 // 3. This function creates an <iframe> (and YouTube player)
      //    after the API code downloads.
      var player, time_update_interval = 0;
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


 

function initialize(){

    // Update the controls on load
    updateTimerDisplay();
    updateProgressBar();

    // Clear any old interval.
    clearInterval(time_update_interval);

    // Start interval to update elapsed time display and
    // the elapsed part of the progress bar every second.
    time_update_interval = setInterval(function () {
        updateTimerDisplay();
        updateProgressBar();
    }, 1000);


    $('#volume-input').val(Math.round(player.getVolume()));
	player.mute();
}


// This function is called by initialize()
function updateProgressBar(){
    // Update the value of our progress bar accordingly.
    $('#progress-bar').val((player.getCurrentTime() / player.getDuration()) * 100);
}


// Progress bar

$('#progress-bar').on('mouseup touchend', function (e) {

    // Calculate the new time for the video.
    // new time in seconds = total duration in seconds * ( value of range input / 100 )
    var newTime = player.getDuration() * (e.target.value / 100);

    // Skip video to new time.
    player.seekTo(newTime);

});



// This function is called by initialize()
function updateTimerDisplay(){
    // Update current time text display.
    $('#current-time').text(formatTime( player.getCurrentTime() ));
    $('#duration').text(formatTime( player.getDuration() ));
}

function formatTime(time){
    time = Math.round(time);

    var minutes = Math.floor(time / 60),
    seconds = time - minutes * 60;

    seconds = seconds < 10 ? '0' + seconds : seconds;

    return minutes + ":" + seconds;
}


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
}//    YT.PlayerState.playing cerlibraces.
		}//    OnPlayerStateChange cerlibraces.
     



$('#player').on('mouseover', function() {
   
    player.unMute();
   
});
$('#player').on('mouseout', function() {
   
    player.Mute();
   
});




$('#play').on('click', function () {
    player.playVideo();
});

$('#pause').on('click', function () {
    player.pauseVideo();
});

$('.anchors').click(function() {
    var id = $(this).attr('id');
     player.loadVideoById(id);
});
