"use strict";

(function($) {
	var url = 'http://www.example.com:4000/test';
	$.post(url, {key: 'test'}, function() {
		console.log('post successful');
	});
	$.get(url, function(data) {
		$('.default-page').html(JSON.stringify(data));
	});
}(jQuery));
