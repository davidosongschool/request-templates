$(document).ready(function() {

// Reveal edit icons on hoover and add bg
$('.contain-service').mouseenter(function(){
    $(this).find(".contain-edit-icons").removeClass("d-none");
    $(this).children("td").addClass("bg-lightgrey");
    console.log("Enter")
})

// hide edit icons on hoover and remove bg
$('.contain-service').mouseleave(function(){
    $(this).find(".contain-edit-icons").addClass("d-none");
    console.log("Enter")
    $(this).children("td").removeClass("bg-lightgrey");
})

});