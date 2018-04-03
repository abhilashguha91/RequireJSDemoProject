// this is the config fuction, if you look closely it accepts the JS object with properties
// baseUrl: This is the base package of all JS files, this is appended as a prefix to all the JS paths you mention below
// paths: again a map of all the JS you are gonna use in this project and their respective paths.
// as require JS is mentioned before no need to mention it here and,
// from the next loaded method onwards requireJS would know the JS by their Path property names(keys eg: jQuery), no need to use the full path
requirejs.config({
	
	baseUrl: 'js',
	paths: {
		jQuery : 'https://code.jquery.com/jquery-2.2.4.min'
	}	
});