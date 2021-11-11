$(window).scroll(function() {
                var scrollTop = $(this).scrollTop();
    
                $('#whiteBackground').css({
                    opacity: function() {
                    var elementHeight = $(this).height(),
                        opacity = ((.7 - (elementHeight - scrollTop) / elementHeight) * 1.7) + 0.07;
                        
                    return $('#whiteBackground').css('background-color', 'rgba(255, 255, 255, ' + opacity + ')');
                    }
                });
            });