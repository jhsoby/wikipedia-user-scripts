/*** To Top ***/

// Adds a link to got back to the top of the page from the footer
// Documentation at [[User:BrandonXLF/ToTop]]
// By [[User:BrandonXLF]]

$(function() {
	$('<li>')
		.html('<a>Back to top</a>')
		.attr('id', 'footer-places-totop')
		.on('click', function() {
			$('html').animate({scrollTop: 0});
		})
		.appendTo('#footer-places');
});