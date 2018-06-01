var play = document.getElementById("play");
var video = document.getElementById("bgVideo");
function togglePausePlay(){
	if(video.paused)
	{
		video.play();
		play.style.opacity=0;
	}
	else{
		video.pause();
		play.style.opacity=1;
	}
}
video.addEventListener('click',function(){
	togglePausePlay();
});
play.addEventListener('click',function(){
	togglePausePlay();
});