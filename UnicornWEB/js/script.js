$( document).ready(function(){

    $('#members').click(function(){

        $('.member-list').slideToggle(500);
    });


    /*$('#goTop').click(function(){

        $('html.body').animate({scrollTop:0} , 900);

        return false;

    });*/

    $('event-photos-item').mouseenter(function(){
       
        var title = $(this).parent('li').data('title');

        var desc = $(this).parent('li').data('desc');

        if (!$(this).children("div").length){
            $(this).append('<div class = "overlay"></div>');
        }

        var overlay = $(this).children('.overlay');

        overlay.html('<h3>' + title + '</h3><p>' + desc + '</p>')

        overlay.fadeIn(800);
    });


    $('event-photos-item').mouseleave(function(){
       
        var overlay = $(this).children('.overlay');

        overlay.fadeOut(800);
    });
});