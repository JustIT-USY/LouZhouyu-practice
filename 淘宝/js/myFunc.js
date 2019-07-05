function $(id) {
    return typeof id === "string" ? document.getElementById(id) : null;
}

//function $(clas) {
  //  return typeof clas === "string" ? document.getElementsByClassName(clas) : null;
//}
function show(obj) {
    return obj.style.display = 'block';
}

function hide(obj) {
    return obj.style.display = 'none';
}

function scroll() {
    if(window.pageYOffset != null) {
        return {
            top: window.pageYOffset,
            left:window.pageXOffset
        }
    }else if(document.compatMode === "CSS1Compat"){ //W3C
        return{
            top:document.documentElement.scrollTop,
            left:document.documentElement.scrollLeft
        }
    }
    return{
        top:document.body.scrollTop,
        left:document.body.scrollLeft
    }
}
/*
获取屏幕的宽度和高度
*/
function  client() {
    if(window.innerWidth){// ie9+
        return {
            width:window.innerWidth,
            height:window.innerHeight
        }
    }else if(document.compatMode === "CSS1Compat"){//W3C
        return {
            width:document.documentElement.clientWidth,
            height:document.documentElement.clientHeight
        }
    }
    return {
        width:document.body.clientWidth,
        height:document.body.clientHeight
    }
}

/*
*匀速动画函数
* {string}ele
* {number}target
* {number}speed
*/
function constant(ele,target,speed) {
    //1.清除定时器
    clearInterval(ele.timer);
    //2.设置定时器
    ele.timer = setInterval(function () {
        box.style.l
    })
}

/*
缓动动画
原理：盒子本身的位置 + 步长（不断变化的，由大变小）
步长：begin = begin + (end - begin)/缓动系数
 */
function buffer(obj,target){
    //1.清除定时器
    clearInterval(obj.timer);
    //2.设置定时器
    obj.timer = setInterval(function () {
        //2.1 求出步长
        var speed = (target - obj.offsetLeft)/20;
        speed = speed > 0 ?Math.ceil(speed):Math.floor(speed);
        //2.2设置动画
        obj.style.left = obj.offsetLeft + speed + 'px';
        obj.innerHTML = obj.offsetLeft;
        //2.3清除定时器
        if(obj.offsetLeft == target){
            clearInterval(obj.timer);
        }
    })
}

/**
 * JS获取CSS的样式
 * @param {object}obj
 * @param {string}attr
 * @returns {string}
 */
function getStyleAttrValue(obj,attr){
    if(obj.currentStyle){  //IE 和 opera
        return obj.currentStyle[attr];
    }else{
        return window.getComputedStyle(obj.null)[attr];
    }
}

/*
Math常用函数
 */
//1.四舍五入
Math.round(10.61);
//2.天花板(向上取整)
Math.round(10.001);
//3.地板(向下取整)
Math.round(10.999);
//4.绝对值(只改变符号)
Math.abs(-12.11);

