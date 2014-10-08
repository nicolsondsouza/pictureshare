
app.deviceready = function(){
	app.phonegap = true;
	app.device = device;
	app.getGeoLocation();
}

app.onPause = function(){
	app.closeWatchGPS(app.watchId);
}

app.onResume = function(){
	app.getGeoLocation();
}

app.closeWatchGPS = function(watchId){
	if(watchId){
		navigator.geolocation.clearWatch(watchId);
	}
}


document.addEventListener("deviceready",app.deviceready, false);
document.addEventListener("pause",app.onPause, false);
document.addEventListener("resume",app.onResume, false);