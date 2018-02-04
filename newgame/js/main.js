$(document).ready(function(){


function touchHandler(event)
{
    var touches = event.changedTouches,
        first = touches[0],
        type = "";
    switch(event.type)
    {
        case "touchstart": type = "mousedown"; break;
        case "touchmove":  type = "mouseover"; break;        
        case "touchend":   type = "mouseup";   break;
        default:           return;
    }

    // initMouseEvent(type, canBubble, cancelable, view, clickCount, 
    //                screenX, screenY, clientX, clientY, ctrlKey, 
    //                altKey, shiftKey, metaKey, button, relatedTarget);

    var simulatedEvent = document.createEvent("MouseEvent");
    simulatedEvent.initMouseEvent(type, true, true, window, 1, 
                                  first.screenX, first.screenY, 
                                  first.clientX, first.clientY, false, 
                                  false, false, false, 0/*left*/, null);

    first.target.dispatchEvent(simulatedEvent);
    event.preventDefault();
}

function init() 
{
    document.addEventListener("touchstart", touchHandler, true);
    document.addEventListener("touchmove", touchHandler, true);
    document.addEventListener("touchend", touchHandler, true);
    document.addEventListener("touchcancel", touchHandler, true);    
}


// document.addEventListener('touchstart', handleTouchStart, false);        
// document.addEventListener('touchmove', handleTouchMove, false);

// var xDown = null;                                                        
// var yDown = null;                                                        

// function handleTouchStart(evt) {                                         
//     xDown = evt.originalEvent.touches[0].clientX;                                      
//     yDown = evt.originalEvent.touches[0].clientY;                                      
// };                                                

// function handleTouchMove(evt) {
//     if ( ! xDown || ! yDown ) {
//         return;
//     }

//     var xUp = evt.originalEvent.touches[0].clientX;                                    
//     var yUp = evt.originalEvent.touches[0].clientY;

//     var xDiff = xDown - xUp;
//     var yDiff = yDown - yUp;

//     if ( Math.abs( xDiff ) > Math.abs( yDiff ) ) {/*most significant*/
//         if ( xDiff > 0 ) {
//             alert('left');
//         } else {
//             alert('right');
//         }                       
//     } else {
//         if ( yDiff > 0 ) {
//             alert('up');
//         } else { 
//             alert('down');
//         }                                                                 
//     }
//     /* reset values */
//     xDown = null;
//     yDown = null;                                             
// };






    $('.test').height($(window).height() - 80)

    function random(){
        return Math.round((Math.random() * 7))
    }
    
    for(var i = 0; i < 30; i++){
        $('td')[i].innerHTML = random();
    }

    $(document).on('mousedown', function(e){
        var array = [];

        var target = e.target;
        if(target.tagName != 'TD') return;
        var sum = 0;
        sum += +target.innerHTML;
        array.push(target);
        console.log(sum);
        $(document).on('mouseover', function(e){
            var target = e.target;
            if(target.tagName != 'TD') return;
            sum += +target.innerHTML;
            array.push(target);
            console.log(sum);

            $(document).on('mouseup', function(){
                if(sum == 10) {
                    console.log(array);
                    for(var i = 0; i < array.length; i++){
                        array[i].innerHTML = '';
                    }
                    // fallDown();
                }
                $(document).off('mouseover');
                sum = 0;
            })
        })
        return false
    })

    // function fallDown(td){
    //     if(isBottomEmpty(td)){
    //         bottomTd.innerHTML = td.innerHTML;
    //         td.innerHTML = '';
    //     }
    // }
});