$(function () {

  $(".fas").on("click", function () {
    var indexBtn = $(".fas").index(this);
    var target = $(".card-body .open-text");
    var targetBtn = target.eq(indexBtn);
    targetBtn.slideToggle(450);

    // if ($(".fas").hasClass("fas-rotate")) {
    //     $(".fas").eq(indexBtn).removeClass("fas-rotate");
    // } else {
    //   $(".fas").addClass("fas-rotate");
    // }

    function indexTool(name,e){
        if ($(name).eq(e).hasClass("fas-rotate")) {
            $(name).eq(e).removeClass("fas-rotate");
        } else {
          $(name).eq(e).addClass("fas-rotate");
        }
    }

    indexTool(".fas",indexBtn);

  });
});
