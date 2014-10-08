app = {};
app.scope = {};
if(window.location.href.match("localhost") || window.location.href.match("192.168.")){
	app.debug = true;
	log = console.log.bind(console);
}	
else{
	log = function(){

	}
}