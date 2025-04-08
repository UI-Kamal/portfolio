jQuery(document).ready(function ($) {
    $('.navbar .nav-item').click(function () {
        $('.navbar .nav-item').removeClass('active');
        $(this).addClass('active')
        var targetDiv = $(this).data('target');

        if(window.innerWidth > 1024) {
            window.scroll(0, 0)
        }

        // Hide all divs and remove the active class
        $('.section-menu.active').fadeOut(400, function () {
            $(this).removeClass('active');
            
            // Show the clicked div with animation
            $('#' + targetDiv).fadeIn(400).addClass('active');
        });
    });

    // Strcit Inspect Element
    // document.addEventListener('contextmenu', function(e) {
    //     e.preventDefault();
    // });

    //Strcit Inspect Element F12 Key
    $(document).keydown(function(e){
        if(e.which === 123){
          return false;
      }
    });
});
