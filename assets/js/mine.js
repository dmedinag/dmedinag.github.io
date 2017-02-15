$( document ).ready(function() {
    $('.esp').hide();
    $('.cs').hide();
    $('.mtb').hide();
});

$("#switchs").click(function(){
    $('.eng').hide();
    $('.esp').show();
});

$("#switche").click(function(){
    $('.esp').hide();
    $('.eng').show();
});

$(".switchcs").click(function(){
    $('.mtb').hide();
    $('.cs').show();
});

$(".switchmtb").click(function(){
    $('.cs').hide();
    $('.mtb').show();
});
