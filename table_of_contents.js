$(document).ready(function(){
    
    $(document).on('touchstart', onTouchStart);

    function onTouchStart( event ) {
        //console.log('touchstart');

        touchStartX = event.originalEvent.touches[0].clientX;
        /*touchStartY = event.originalEvent.touches[0].clientY;
        touchMoveX = null;
        touchMoveY = null;*/

    }
    
    $(document).on('touchmove', onTouchMove);
    
    function onTouchMove( event ) {
        touchMoveX = event.originalEvent.touches[0].clientX;
        touchMoveY = event.originalEvent.touches[0].clientY;
        
        alert(touchMoveX);
        
        //$('#toc_icon_hide').html(touchMoveX);
        //$('#toc_icon_hide').html(touchMoveY);

    }

    /*function onTouchEnd( event ) {
        //window.unbindEvent( document, 'touchmove', onTouchMove );
        if( document.removeEventListener ) {
            document.removeEventListener( 'touchmove', onTouchMove, false );
        }
        else {
            document.detachEvent( 'on' + 'touchmove', onTouchMove );
        }

        // If there was no movement this was a tap
        if( touchMoveX === null && touchMoveY === null ) {
            console.log('tap');
        }
    }*/
    
    
    // ################## END  meny code  ###########
    
    var toc_shown = false;
    
    $('body').on('tap click', '#toc_icon', function(){
        show_tab();
    });
    
    $('body').on('tap click', '#toc_icon_hide', function(){
        hide_tab();
    });
    
    $('body').on('click',function(){
        if (toc_shown){
            //alert('!!');
            //hide_tab();
        };
    });
    
    function show_tab(){
        $('#toc').css('left', '0%');
        $('#toc').css('-moz-transition', 'left 0.5s ease-in-out');
        $('#toc').css('-webkit-transition', 'left 0.5s ease-in-out');
        $('#toc').css('-o-transition', 'left 0.5s ease-in-out');
        $('#toc').css('transition', 'left 0.5s ease-in-out');
        toc_shown = true;
    };
    
    function hide_tab(){
        $('#toc').css('left', '-50%');
        $('#toc').css('-moz-transition', 'left 0.5s ease-in-out');
        $('#toc').css('-webkit-transition', 'left 0.5s ease-in-out');
        $('#toc').css('-o-transition', 'left 0.5s ease-in-out');
        $('#toc').css('transition', 'left 0.5s ease-in-out');
        toc_shown = false;
    };
    
    
    $('#toc_1').on('tap click', function(){
        setTimeout(function () {
        page1Scroll.scrollToElement('li:nth-child(1)', 100);
        }, 100);
        hide_tab();
        meny.close();
    });
    $('#toc_2').on('tap click', function(){
        setTimeout(function () {
        page1Scroll.scrollToElement('li:nth-child(2)', 100);
        }, 100);
        hide_tab();
        meny.close();
    });
    $('#toc_3').on('tap click', function(){
        setTimeout(function () {
        page1Scroll.scrollToElement('li:nth-child(3)', 100);
        }, 100);
        hide_tab();
        meny.close();
    });


});