/**
 * Created by mac on 27.04.2017.
 */

$(document).ready(function(){
    $('.row').each(function(){
        var highestBox = 0;
        $('.column-one-height ', this).each(function(){
            if($(this).height() > highestBox) {
                highestBox = $(this).height();
            }
        });
        $('.column-one-height ',this).height(highestBox);
    });
});
