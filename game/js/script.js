$(function(){
    var counter;
    $('#clearResults').on('click',clearResults)
    var timerId;
    localStore();
    function startGame() {
        localStore();
        $("<audio><source src='sounds/newGameSound.wav'></source></audio>")[0].play();
        $('.container').html("").removeClass('win');
        $('#time').html(0);
        counter = 0;
        clearInterval(timerId);
        var arr = [];
        for(var j = 1; j <= 8; j++){
            arr.push('bg' + j);
        }
        arr = arr.concat(arr);
        var newArr = shuffle(arr);
        for (var i = 0; i < 16; i++){
            $('.container').append($('<div class = "bg"></div>'))
        }
        $('.container').on('click',function(){
            $(this).off('click');
            clearInterval(timerId);
            timerId = setInterval(function(){
                counter++;
                $('#time').html(counter)
            },1000);
        });
        function func(){
            $(this).addClass(newArr[$(this).index()]);
            var newPic = $(this);
            var newClass = newArr[$(this).index()];
            $("<audio><source src='sounds/normalSound.wav'></source></audio>")[0].play();
            if(oldPic){
                if(newPic[0] == oldPic[0]){
                    newPic.removeClass(newClass);
                    oldPic = '';
                    oldClass = '';
                    return;
                }
                else if(newPic.hasClass(oldClass)){
                    $('.bg').off('click',func);
                    setTimeout(function(){
                        newPic.css('visibility','hidden');
                        oldPic.css('visibility','hidden');
                        oldClass = '';
                        oldPic = '';
                        $("<audio><source src='sounds/matchSound.wav'></source></audio>")[0].play();
                        $('.bg').on('click',func);
                        if ( $("div[style]").length == 16){
                            $("<audio><source src='sounds/winSound.wav'></source></audio>")[0].play();
                            $('.container').html('<div id = "last">YOU WIN!!! <br>' + counter + ' seconds! <br><span id="enter">Enter your name:</span>  <br> <input id = "input" type = "text"><br><button id = "confirm">Confirm</button></div>').addClass('win');
                            $('#confirm').on('click',confirm);
                            clearInterval(timerId);
                        }
                    },500);
                    return;
                }
                else{
                    $('.bg').off('click',func);
                    setTimeout(function(){
                        oldPic.removeClass(oldClass);
                        newPic.removeClass(newClass);
                        oldClass = '';
                        oldPic = '';
                        $("<audio><source src='sounds/notMatchSound.wav'></source></audio>")[0].play();
                        $('.bg').on('click',func);
                    },500);
                    return;
                }
            }
            oldPic = $(this);
            oldClass = newArr[$(this).index()];
        }
        var oldPic = '';
        var oldClass = '';
        $('.bg').on('click',func);

        function shuffle(array) {
            var counter = array.length;
            while (counter > 0) {
                var index = Math.floor(Math.random() * counter);
                counter--;
                var temp = array[counter];
                array[counter] = array[index];
                array[index] = temp;
            }
            return array;
        }
    }
    startGame();
    $('.newGame').on('click',startGame);

    function localStore(){
        if(localStorage.length){
            var LocalArr = [];
            for(var i = 1; i <= localStorage.length; i++){
                var returnObjectNew = JSON.parse(localStorage.getItem('myKey' + i));
                LocalArr.push(returnObjectNew);
            }
            LocalArr.sort(function(a,b){
                return a.localTime - b.localTime
            })
            $('#ol').html("");
            for(var j = 0; j < LocalArr.length; j++){
                var li = $('<li></li>').html(LocalArr[j].name + " - " + LocalArr[j].localTime);
                $('#ol').append(li)
            }
        }
    }
    function confirm(){
        var obj = {
            name:$('#input').val() || 'Unknown player',
            localTime:counter
        }
        var serialObject = JSON.stringify(obj);
        localStorage.setItem('myKey' + (localStorage.length + 1), serialObject);
        localStore();
        $('#input').css('display','none');
        $('#confirm').css('display','none');
        $('#enter').css('display','none');
    }
    function clearResults(){
        localStorage.clear();
        $('#ol').html('')
    }


});
