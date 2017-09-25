var $ = require('./jquery');
require('../resources/less/index.less') 
setParallax = function(obj){
    var displacement = obj.eleVal,
        ww = $(window).width() / 2,
        wh = $(window).height() / 2,
        left = displacement.position().left,
        top = displacement.position().top,
        range = obj.rangeVal,
        xMove = typeof obj.xMove === 'undefined'? false: obj.xMove,
        yMove = typeof obj.yMove === 'undefined'? false: obj.yMove;
    if(xMove && yMove){
        $(document).mousemove(function(e){
            var x = e.pageX,
                y = e.pageY,
                nx = range * (x - ww),
                ny = range * (y - wh);
            displacement.css({
                left: -nx + left + 'px',
                top: -ny + top + 'px'
            });
        })
    }else if(xMove){
        $(document).mousemove(function(e){
            var x = e.pageX,
                nx = range*(x-ww);
            displacement.css({
                left: -nx + left+'px'
            });
        })
    }else if(yMove){
        $(document).mousemove(function(e){
            var y = e.pageY,
                ny = range*(y - wh);
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