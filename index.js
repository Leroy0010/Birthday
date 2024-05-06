var playing = false;
var sound = new Audio("./01-Monk-Turner-Fascinoma-Its-Your-Birthday(chosic.com).mp3");

$(".btn").on("click", function () {
    $(this).toggleClass("down");
    
    if(!playing){
        sound.play();
        $('.btn').addClass("pressed");
        setTimeout(function () {
            $(".btn").removeClass("pressed");
        }, 500);
        $(".btn").text("Pause Song");
        playing = true;
    } 
    else if(playing) {
            sound.pause();
            $('.btn').addClass("pressed");
            setTimeout(function () {
                $(".btn").removeClass("pressed");
            }, 500);
            $(".btn").text("Play Song");
            playing = false;
  
    }
}
);
