$(".page3_one").on("click",function () {
    if ($(this).hasClass("active")) {
        $(this).removeClass("active")
        $(".page3_txt").eq($(this).index()).hide();
    }else {
        $(this).addClass("active")
        $(".page3_txt").eq($(this).index()).show();
    }
})
$(".page3_one").on("mouseenter",function () {
    $(this).addClass("color");
    $(".span").eq($(this).index()).addClass("color");
})
$(".page3_one").on("mouseleave",function () {
    $(this).removeClass("color");
    $(".span").eq($(this).index()).removeClass("color");
})