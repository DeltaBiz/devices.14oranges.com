document.addEventListener("deviceready", onDeviceReady, false);
function onDeviceReady() {
    $("#platform").text(device.platform);
    $("#model").text(device.model);
    $("#uuid").text(device.uuid);
    $("#version").text(device.version);
    FastClick.attach(document.body);
    
    // populate devices and users
    $.getJSON( "http://devices.14oranges.com/api/users/", function( data ) {
  	var items = [];
 	 $.each( data, function( key, val ) {
   		 items.push( "<li id='" + key + "'>" + val + "</li>" );
  	});
 
  	$( "<ul/>", {
   		 "class": "my-new-list",
    		html: items.join( "" )
	  	}).appendTo( "body" );
	});
}