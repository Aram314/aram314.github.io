$(document).ready(function(){

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