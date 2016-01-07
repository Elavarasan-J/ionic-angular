$(document) .on 'click', '.review-btn',(e)->
	e.preventDefault()
	$('html,body').animate({scrollTop:$("#review-form-wrap").offset().top},1000);
$(document).on 'click', '.btn-upload',(e)->
	e.preventDefault()
	$(this).next().trigger('click')