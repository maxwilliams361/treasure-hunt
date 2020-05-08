$(".isabelle").click(function() {
    $(".isabelleNo").fadeIn();
    $(".isabelle").fadeOut();
    $(".isabelleYes").fadeOut();
});

$(".isabelleYes").click(function() {
    $(".tree").fadeIn();
    $(".isabelle").fadeOut();
    $(".isabelleYes").fadeOut();
});

$(".tree").dblclick(function() {
    $(".apple").fadeIn();
    $(".tree").fadeOut();
});

$(".apple").click(function() {
    $(".bob").fadeIn();
    $(".bobYes").fadeIn();
    $(".apple").fadeOut();
});

$(".bobYes").click(function() {
    $(".bob2").fadeIn();
    $(".bob").fadeOut();
    $(".bobYes").fadeOut();
});

$(".bob2").click(function() {
    $(".bob4").fadeIn();
    $(".bob2").fadeOut();
});

$(".bob").click(function() {
    $(".bob3").fadeIn();
    $(".bobYes").fadeOut();
    $(".bob").fadeOut();
});

$(".bob3").click(function() {
    $(".bugnet").fadeIn();
    $(".bob3").fadeOut();
});

$(".bugnet").dblclick(function() {
    $(".bee").fadeIn();
    $(".bugnet").fadeOut();
});


