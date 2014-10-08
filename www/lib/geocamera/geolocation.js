app.testLatitude = 51.484995;
app.testLongitude = -0.182766;


if(!app.location)
    app.location = {};

app.getLocation = function(position) {
    app.location = position.coords;
    app.location.timestamp = position.timestamp;
    app.scope.searchController.scope.latitude = app.location.latitude;
    app.scope.searchController.scope.longitude = app.location.longitude;
    app.scope.searchController.scope.$apply(function() {});
}
app.getLocationError = function(error){
    var message = null;
    switch(error.code) {
        case error.PERMISSION_DENIED:
            message = ("User denied the request for Geolocation.");
        break;
        case error.POSITION_UNAVAILABLE:
            message = ("Location information is unavailable.");
        break;
        case error.TIMEOUT:
            message = ("The request to get user location timed out.");
        break;
        case error.UNKNOWN_ERROR:
            message = ("An unknown error occurred.");
        break;
    }
    if(!app.debug)
    alert(message);
}

app.getGeoLocation = function(timeout){
    navigator.geolocation.getCurrentPosition(app.getLocation, app.getLocationError,app.getLocationOptions);
    if(!app.debug){
        app.closeWatchGPS(app.watchId);
        app.watchId = navigator.geolocation.watchPosition(app.getLocation, app.getLocationError,app.getLocationOptions);
    }
}