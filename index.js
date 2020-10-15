/* Page Management - Ben Aeraki */

function pageOnLoad() {
	let tag = location.hash;
	if (tag === '') {
		tag = '#Home';
		location.hash = '#Home';
	} else if (tag.startsWith('#Article/')) {
		let articlename = tag.substring(9);
		tag='#Article';
		$('#Article').load('./articles/' + articlename + '.html');
	} else if (!$(tag+'.page').length) { tag='#404' };
	openPage(tag);
};

function openPage(id) {
	$('.page').css('display', 'none');
	$('.page'+id).css('display', 'block');
};

window.onhashchange = function () {
	pageOnLoad();
};