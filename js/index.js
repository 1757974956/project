
//index页面品牌服务区域
$(".page2_lefr li").on("mouseleave",function () {
    $(this).removeClass("active")
})
$(".page2_lefr li").on("click",function () {
    $(this).addClass("active1").siblings().removeClass("active1");
})
$(".page2_lefr li").on("click",function () {
    $(".bg>div").eq($(this).index()).show().siblings().hide();
})

//index页面 行业解决方案区域
$(".div1").on("mouseleave",function () {
    $(".img1").show();
    $(".img2").hide();
})
$(".div2").on("mouseenter",function () {
    $(".img3").hide();
    $(".img4").show();
})
$(".div2").on("mouseleave",function () {
    $(".img3").show();
    $(".img4").hide();
})
$(".div3").on("mouseenter",function () {
    $(".img5").hide();
    $(".img6").show();
})
$(".div3").on("mouseleave",function () {
    $(".img5").show();
    $(".img6").hide();
})
$(".div4").on("mouseenter",function () {
    $(".img7").hide();
    $(".img8").show();
})
$(".div4").on("mouseleave",function () {
    $(".img7").show();
    $(".img8").hide();
})
