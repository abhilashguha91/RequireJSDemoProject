
// The define method is just like the require method, the only different being, in define method the arrray of Strings that has the JS names
// are not executed but simply loaded
// Hence here we are telling to load the "jQuery", mind you at this point the RequireJS already done loading the main.js
// Hence, it knows what jQuery refers to, i.e baseUrl + path('jQuery')
// Once jQuery is "Loaded" execute the call back function
define(['jQuery'],function(){
	
	// Once you see this on your screen open the Dev tools in your browser(F12) and check under networks and you'll see all the JS loaded
	// in the particular order as mentioned above
	alert('howdy stranger?');
	
	
});

