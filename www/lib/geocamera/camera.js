app.getCamera = function(){
	try{
		navigator.camera.getPicture(app.cameraSuccess, app.cameraError, {
			quality: 49,
			targetWidth: 640,
			targetHeight: 480,
			destinationType: Camera.DestinationType.DATA_URL
		});
	}
	catch(err){
		alert(err);
	}
}
  
app.cameraSuccess = function(data){
	var image = "data:image/jpeg;base64," + data;
	app.scope.searchController.scope.imageData = image;
	app.scope.searchController.scope.$apply(function() {});
	app.upload(data);
}

app.cameraError = function(error){
	alert("camera " +error)
}