$(document).ready(function(){
    aboutMe();
});

function aboutMe(){
    $('ul#list-about-me li h4').click(function(){
        $(this).next().slideToggle("slow");           
    });
};