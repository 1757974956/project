window.onload=function(){
    (function(win,doc){
        function change(){
            doc.documentElement.style.fontSize = 20 * doc.documentElement.clientWidth / 375  + 'px';
            //fontSize的值就是1rem大小                  获取页面宽度                    375是一个基准，可以写其他值
            //在页面宽度为375px的时候1rem大小为20px;页面宽度发生变化，fontSize的值会变化,rem值页面相应的变化，但是只需要根据设计图                  的尺寸来就可以，移动端一般都给双倍图，常用的320(ipone5,5s),375(ipone6,6s,7)
        }
        change();
        win.addEventListener('resize', change, false);
        //当页面发生缩放的时候，调用change时间，页面发生相应的变化
    })(window,document);
}