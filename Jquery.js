/*Premium Pop-up*/
$(document).ready(function(){
$('#openPopup').click(function(){
$('#popup00, #overlayer').fadeIn();
});
$('#closePopup').click(function(){
$('#popup00, #overlayer').fadeOut();
});
});

/*Payment Pop-up*/
$(document).ready(function(){
$("#openPaypop").click(function(){
$("#paypop").show();
$("#paylayer").show();
})
$("#confirmButton").click(function(){
$("#confirmButton").hide();
$("#paydollar").hide();
$("#payment").show();
});
$("#closePaypop").click(function(){
$("#paypop").hide();
$("#paylayer").hide();
});
});

/*Albums*/
$(document).ready(function(){
$('.thumbnail-images img').on('mouseenter', function(){
var newSrc = $(this).attr('src');
var newAlt = $(this).attr('alt');
$('.main-image img').attr('src', newSrc);
$('.main-image .overlay05').text(newAlt);
});
});

/*Recent Songs*/
$(document).ready(function(){
$('.slider-img').on('mouseenter', function(){
$('.slider-img').removeClass('active');
$(this).addClass("active");
});
});
