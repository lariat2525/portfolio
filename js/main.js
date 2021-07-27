$(function () {

  $(".fas").on("click", function () {
    var indexBtn = $(".fas").index(this);
    var target = $(".card-body .open-text");
    var targetBtn = target.eq(indexBtn);
    targetBtn.slideToggle(450);

    function indexTool(name,e){
        if ($(name).eq(e).hasClass("fas-rotate")) {
            $(name).eq(e).removeClass("fas-rotate");
        } else {
          $(name).eq(e).addClass("fas-rotate");
        }
    }

    indexTool(".fas",indexBtn);

  });

  $('a[href^="#"]').click(function(){

    let href= $(this).attr("href");

    let hreftg = $(href == "#" || href == "" ? 'html' : href);

    let position = hreftg.offset().top;

    $("html, body").animate({scrollTop:position}, 200, "swing");
    return false;
  });
});
