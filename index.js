/* Page Management - Ben Aeraki */

function pageOnLoad() {
	randomGIF();
	let tag = location.hash;
	if (tag === '') {
		tag = '#Home';
		location.hash = '#Home';
	} else if (tag.startsWith('#Article/')) {
		let articlename = tag.substring(9);
		tag='#Article';
		$('#Article').load('./articles/' + articlename + '.html');
	} else if (!$('.page'+tag+'_0').length) { tag='#404' };
	openPage(tag);
};

function openPage(id) {
	$('.page').css('display', 'none');
	$('.page'+id+'_0').css('display', 'block');

	$('header .list a').removeClass();
	$('header .list '+id+'_t').addClass('on');
	window.scrollTo(0, 0);
};

function randomGIF() {
	let randomgif = Math.floor(Math.random() * 13);
	$('#randgif img').attr('src', './img/gif_'+randomgif+'.gif');
};

window.onhashchange = function () {
	pageOnLoad();
};