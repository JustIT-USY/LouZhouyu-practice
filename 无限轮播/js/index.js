window.onload = function () {
    //1.获取需要的标签
    var slider = $("slider");
    var slider_main = $("slider_main");
    var slider_main_img = slider_main.children;
    var slider_ctl = slider.children[1];

    var iNow = 0;

    //2.动态创建指示器
    for(var k=0;k<slider_main_img.length;k++){
        var span = document.createElement("span");
        span.className = "slider-ctl-icon";
        slider_ctl.insertBefore(span,slider_ctl.children[1]);
    }

    //3.让第一个选中
    slider_ctl.children[1].className = "slider-ctl-icon current";

    //4.让滚动的内容归位
    var scroll_w = slider.offsetWidth;
    for(var j=1;j<slider_main_img.length;j++){
        slider_main_img[j].style.left = scroll_w + "px";
    }

    //5.遍历监听操作
    var slider_ctl_child = slider_ctl.children;
    for(var i=0;i<slider_ctl_child.length;i++){
        //5.1监听点击
        slider_ctl_child[i].onmousedown = function () {
            //5.2判断
            if(this.className === "slider-ctl-prev"){//左边
                /*
                * 1.当前可视区域的图片快速右移；
                * 2.上一张图片快速出现在可视区域的左边
                * 3.在这张图片做动画进入
                */
                buffer(slider_main_img[iNow],{"left":scroll_w});
                iNow--;
                //判断
                if(iNow<0){
                    iNow = slider_main_img.length - 1;
                }
                slider_main_img[iNow].style.left = -scroll_w + 'px';
                buffer(slider_main_img[iNow],{"left":0});
            }else if(this.className ==="slider-ctl-next"){//右边
                buffer(slider_main_img[iNow],{"left":-scroll_w});
                iNow++;
                //判断
                if(iNow >= slider_main_img.length){
                    iNow = 0;
                }
                slider_main_img[iNow].style.left = scroll_w + 'px';
                buffer(slider_main_img[iNow],{"left":0});
            }else{// 下边

            }

        }
    }
};