$('h1').click
(function() {
    $(this).css('background-color', '#FF0');
});
//Highlights the h1 element on'click

$('p').dblclick
(function(e) {
    $(this).css('font-size', '20px');
});
//changes the size of paragraphs when clicked on

$('li').hover(
    function() {
        $(this).css('background-color', '#F00');
    },
    function() {
        $(this).css('background-color', '#FFF');
    }
);
//on hover changes the list color to red, stays the same if not