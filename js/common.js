//底部二维码
$(".span1").on("mouseenter",function () {
    $(".span1 img:nth-child(2)").css("display","block")
})
$(".span1").on("mouseleave",function () {
    $(".span1 img:nth-child(2)").css("display","none")
})
$(".span2").on("mouseenter",function () {
    $(".span2 img:nth-child(2)").css("display","block")
})
$(".span2").on("mouseleave",function () {
    $(".span2 img:nth-child(2)").css("display","none")
})

//顶部下拉栏
$(".li1").on("mouseenter",function () {
    $(".li1 div").show();
})
$(".li1").on("mouseleave",function () {
    $(".li1 div").hide();
})
$(".li2").on("mouseenter",function () {
    $(".li2 div").show();
})
$(".li2").on("mouseleave",function () {
    $(".li2 div").hide();
})
$(".li3").on("mouseenter",function () {
    $(".li3 div").show();
})
$(".li3").on("mouseleave",function () {
    $(".li3 div").hide();
})
$(".li4").on("mouseenter",function () {
    $(".li4 div").show();
})
$(".li4").on("mouseleave",function () {
    $(".li4 div").hide();
})
$(".div1").on("mouseenter",function () {
    $(".img1").hide();
    $(".img2").show();
})
//顶部下划线
$(".a").on("mouseenter",function () {
    $(this).addClass("nav1")
})
$(".a").on("mouseleave",function () {
    $(this).removeClass("nav1")
})
$(".page2_lefr li").on("mouseenter",function () {
    $(this).addClass("active").siblings().removeClass("active");
})
$(".ul p").on("mouseenter",function () {
    $(this).addClass("bgc")
})
$(".ul p").on("mouseleave",function () {
    $(this).removeClass("bgc")
})

//品牌服务下拉栏
$(".div3").on("click",function () {
    $("#div3").css("display","block").siblings().css("display","none");
    $("#li3").addClass("active1").siblings().removeClass("active1");
    $("#li2").removeClass("active");
})
$(".div4").on("click",function () {
    $("#div4").css("display","block").siblings().css("display","none");
    $("#li4").addClass("active1").siblings().removeClass("active1");
    $("#li2").removeClass("active");
})
$(".div5").on("click",function () {
    $("#div5").css("display","block").siblings().css("display","none");
    $("#li5").addClass("active1").siblings().removeClass("active1");
    $("#li2").removeClass("active");
})

//返回顶部按钮
$(window).scroll(function() {
    let s = $(window).scrollTop();
    console.log(s);
    // s > 1 ? $(".row").addClass("backTop") : $(".row").addClass("backOut");
    // s > 1 ? $(".row").addClass("backTop") : $(".row").addClass("backOut");
    if (s>1){
        $(".row").addClass("backTop").removeClass("backOut");
    }else{
        $(".row").addClass("backOut").removeClass("backTop");
    }
    var obtn=document.getElementById("btn");
    obtn.onclick=function() {
        //让按钮隐藏,消除到一定距离显示按钮事件。
        var duration = 500, interval = 10;//总时间和频率
        var target = document.documentElement.scrollTop || document.body.scrollTop;//滑动总距离
        var step = (target / duration) * interval;//每次走的距离

        var timer = window.setInterval(function () {
            var curTop = document.documentElement.scrollTop || document.body.scrollTop;
            if (curTop === 0) {
                window.clearInterval(timer);
                // window.onscroll = computedDisplay;//回到顶部的时候要开启事件。
                return;
            }
            curTop -= step;
            document.documentElement.scrollTop = document.body.scrollTop = curTop;
        }, interval)
    }
});
