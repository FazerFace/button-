$('.block span').on('click', function(e){
    (e).preventDefault();
    $(this).toggleClass('block_animation');
    $(this).toggleClass('block_black')
});