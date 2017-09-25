var $ = require('./jquery');
require('../resources/less/index.less');


setParallax = function(options){
    var displacement = options.eleVal,
        //ww获得屏幕宽高的一半，也就是中心线
        ww = $(window).width() / 2,
        wh = $(window).height() / 2,
        //获得当前元素的left和top值
        left = displacement.position().left,
        top = displacement.position().top,
        range = options.rangeVal,
        xMove = typeof options.xMove === 'undefined'? false: options.xMove,
        yMove = typeof options.yMove === 'undefined'? false: options.yMove;
    //如果传入的配置项的xMove（x方向移动）和yMove为true(y方向移动)
    if(xMove && yMove){
        $(document).mousemove(function(e){
            //获取鼠标在页面中的x和y坐标
            var x = e.pageX,
                y = e.pageY,
                /*
                    计算鼠标偏离中心线的距离
                    当鼠标在中心线右边的时候，为正值
                    再乘以视差倍率
                */
                nx = range * (x - ww),
                ny = range * (y - wh);
            //-nx和-ny代表相反方向
            displacement.css({
                left: -nx + left + 'px',
                top: -ny + top + 'px'
            });
        })
    } else if(xMove){
        $(document).mousemove(function(e){
            var x = e.pageX,
                nx = range * (x - ww);
            displacement.css({
                left: -nx + left + 'px'
            });
        })
    } else if(yMove){
        $(document).mousemove(function(e){
            var y = e.pageY,
                ny = range * (y - wh);
            displacement.css({
                top: -ny + top +'px'
            });
        })
    }
}
setParallax({
    eleVal: $('.bf-1'),
    rangeVal: 0.1,
    xMove: true,
    yMove: true
});
setParallax({
    eleVal: $('.bf-2'),
    rangeVal: 1,
    xMove: true,
    yMove: true
});
setParallax({
    eleVal: $('.bf-3'),
    rangeVal: 0.5,
    xMove: true,
    yMove: true
});