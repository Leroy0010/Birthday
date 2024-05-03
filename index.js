$(".btn").on("click", function () {
    var sound = new Audio("./01-Monk-Turner-Fascinoma-Its-Your-Birthday(chosic.com).mp3");
    sound.play();
    $('.btn').addClass("pressed");
    setTimeout(function () {
        $(".btn").removeClass("pressed");
    }, 500);
}
);