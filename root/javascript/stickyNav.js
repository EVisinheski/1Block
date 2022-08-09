function displayIframe() {
    document.getElementById("iframeDisplay").innerHTML = "<iframe src=\"../html/ref1.html\" height=\"200\" width=\"300\" ></iframe>";

}

/*
Currently not working in future to
transition nav bar to change colour depending on the section scrolled at
*/
// $(document).ready(function () {
//     $(window).scroll(function () {
//         var scrollTop = $(window).scrollTop();
//         if (scrollTop > 50) {
//             $('body').addClass('header-fixed');
//         } else {
//             $('body').removeClass('header-fixed');
//         }

//         var topOffset = $('#about').offset().top;
//         var headerHeight = $('#topnav').height();
//         var transitionPoint = topOffset - headerHeight;
//         if (scrollTop > transitionPoint) {
//             $('#topnav').addClass('alt-header');

//         } else {
//             $('#topnav').removeClass('alt-header');
//         }
//     });
// });