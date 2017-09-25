parallax demo
--

demo说明：
-
demo为一个三个图片视差滚动：

 * `npm install`之后， 使用`npm start`在浏览器中预览效果
 * 主文件在`app/index.js`中

实现说明：
-
主要通过监听mousemove事件, 通过建立x和y横竖两条中心线来判断鼠标的偏移，通过传入的`倍率`产生不同的偏移值，从而实现视差滚动。





