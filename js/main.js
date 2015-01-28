$(document).ready( function() {

	var links = [];

	$(function() {
		$( 'form' ).submit(function (event) {
			event.preventDefault();
			var search = $( '#search' ).val();
			getResults(search);
		});
	});


	function getResults(searchTerm) {
		var params = {
			part: 'snippet',
			key: 'AIzaSyDQKpIXopuCsirmxd0YqFI3ZwtTaNp0w9k',
			q: searchTerm
		}
		var url = 'https://www.googleapis.com/youtube/v3/search';

		$.getJSON( url, params, function(data) {
			showResults(data.items);
			console.log(data.items);
		});
	}

	function showResults(results) {

		var code = '';
		for (var i = 0; i < results.length; i++) {
			code += '<div class="result"><a href="https://www.youtube.com/watch?v=' +  results[i].id.videoId + '" target="_blank"><p class="title">' + results[i].snippet.title + '</p><img alt="thumbnail" class="thumbnail" src="' + results[i].snippet.thumbnails.medium.url + '"></a></div>';				
			links[i] = results[i].id.videoId;
		}
		$( '#search-results' ).html(code);
	}



});