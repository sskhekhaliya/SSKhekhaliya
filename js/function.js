$.fn.equalHeights = function(){
	var max_height = 0;
	$(this).each(function(){
		max_height = Math.max($(this).height(), max_height);
	});
	$(this).each(function(){
		$(this).height(max_height);
	});
};

$(document).ready(function(){
    $('.article_img').equalHeights();
});
$(document).ready(function(){
    $('.service__box-desc').equalHeights();
});
