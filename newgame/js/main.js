$(document).ready(function(){

    $('.test').height($(window).height() - 80)

    function random(){
        return Math.floor((Math.random() * (4-1+1)+1));
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
        // target.css('background-color','yellow');
        target.style.backgroundColor = 'yellow';
        array.push(target);
        console.log(sum);
        $(document).on('mouseover', function(e){
            var target = e.target;
            if(target.tagName != 'TD') return;
            sum += +target.innerHTML;
            // target.css('background-color','yellow');
            target.style.backgroundColor = 'yellow';
            array.push(target);
            console.log(sum);

            $(document).on('mouseup', function(){
                // target.css('background-color','white');
                // target.style.backgroundColor = 'white';
                $('td').css('background-color','white');
                if(sum == 5) {
                    console.log(array);
                    for(var i = 0; i < array.length; i++){
                        array[i].innerHTML = '';
                    }
                    
                    setTimeout(function(){
                        for(var i = 0; i < array.length; i++){
                          array[i].innerHTML = Math.floor((Math.random() * (4-1+1)+1));
                        }
                    }, 500);
                    
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