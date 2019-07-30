window.onload = function () {
    //1.顶部导航栏
    // 1.1选择地区
    var Area = $('Area');
    var xiala = $("xiala");
    var xialai_lis = xiala.children[0].children;
    hide(xiala);
    Area.onmouseover = function () {
        show(xiala);
        for(var i=0;i<xialai_lis.length;i++){
            (function () {
                var li = xialai_lis[i];
                li.onclick = function () {
                    Area.innerText = li.innerHTML;
                }
            })(i);
        }
    };
    xiala.onmouseover = function(){
        show(xiala);
    };
    Area.onmouseout = function(){
        hide(xiala);
    };
    xiala.onmouseout = function(){
      hide(xiala);
    };
    //1.2我的淘宝
    var mytaobao_1 = $('Mytaobao-1');
    var mytaobao_2 = $('Mytaobao-2');
    hide(mytaobao_2);
    mytaobao_1.onmouseover = function () {
        show(mytaobao_2);
    };
    mytaobao_2.onmouseover = function () {
        show(mytaobao_2);
    };
    mytaobao_1.onmouseout = function () {
        hide(mytaobao_2);
    };
    mytaobao_2.onmouseleave = function () {
        hide(mytaobao_2);
    };

    //1.3购物车
    var shopcar = $('ShopCar');
    var shopcar_1 = $('shopcar-1');
    hide(shopcar_1);
    shopcar.onmouseenter = function () {
        show(shopcar_1);
    };
    shopcar_1.onmouseenter = function () {
        show(shopcar_1);
    };
    shopcar.onmouseout = function () {
        hide(shopcar_1)
    };
    shopcar_1.onmouseout = function () {
        hide(shopcar_1)
    };

    //1.4收藏夹
    var collection = $('collection');
    var collection_1 = $('collection-1');
    hide(collection_1);
    collection.onmouseover = function () {
        show(collection_1);
    };
    collection_1.onmouseover = function () {
        show(collection_1);
    };
    collection.onmouseleave = function () {
        hide(collection_1);
    };
    collection_1.onmouseleave = function () {
        hide(collection_1);
    };
    //2.1天猫 淘宝 店铺
    var searchTab_0 = $('searchTab_0');
    var searchTab_1 = $('searchTab_1');
    var searchTab_2 = $('searchTab_2');
    searchTab_1.onclick =function () {
        searchTab_1.className = 'searchTab';
        searchTab_0.className = 'searchTab_1';
        searchTab_2.className = 'searchTab_1';
    };
    searchTab_0.onclick =function () {
        searchTab_0.className = 'searchTab';
        searchTab_1.className = 'searchTab_1';
        searchTab_2.className = 'searchTab_1';
    };
    searchTab_2.onclick =function () {
        searchTab_2.className = 'searchTab';
        searchTab_0.className = 'searchTab_1';
        searchTab_1.className = 'searchTab_1';
    };
    //2.3关闭二维码
    var guanbi = $('guanbiEWM');
    var EWM_logo = $('sjTB_logo');
    guanbi.onclick = function () {
        hide(guanbi);
        hide(EWM_logo);
    };
    //2.4吸顶搜索框
    var xiding_li = $('xiding_ul').children;
    var xiding = $('xiding');
    hide(xiding);hide(xiding_li[1]);hide(xiding_li[2]);
    xiding_li[0].onmouseover = function () {
        xiding_li[0].style.borderBottomLeftRadius = 0 + 'px';
      show(xiding_li[1]);show(xiding_li[2]);
    };
    xiding_li[1].onmouseover = function () {
        show(xiding_li[1]);show(xiding_li[2]);xiding_li[0].style.borderBottomLeftRadius = 0 + 'px';
    };
    xiding_li[2].onmouseover = function () {
        show(xiding_li[1]);show(xiding_li[2]);xiding_li[0].style.borderBottomLeftRadius = 0 + 'px';
    };
    $('xiding_ul').onmouseout = function () {
        xiding_li[0].style.borderBottomLeftRadius = 20 + 'px';
        hide(xiding_li[1]);hide(xiding_li[2]);
    };
    window.onscroll = function () {
      var scroll_top_height = scroll().top;
      if(scroll_top_height >= 190){
          show(xiding);
      }
      else hide(xiding);
    };

    //3.2旺旺背景图
    var dafenlei_1 = $('dafenlei_1');
    var wangwang = dafenlei_1.children[2];
    var ul = dafenlei_1.children[1];
    var allLis = ul.children;
    hide(wangwang);
    for(var i=0;i<allLis.length;i++){
        var li = allLis[i];
        li.onmouseover = function () {
            var offsetLeft = this.offsetLeft;
            wangwang.style.left = (offsetLeft + 8) + 'px';
            show(wangwang);
        };
        li.onmouseout = function () {
            hide(wangwang);
        }
    }

    //4.2
    //1.获取标签
    var lis = $('Lbt_ul').children;
    var currentIndex =0,indicatorIndex =0;
    var left_jiantou = $('main_top_m_s').children[1];
    var right_jiantou = $('main_top_m_s').children[2];
    //2.克隆li标签
    $('Lbt_ul').appendChild(lis[0].cloneNode(true));
    //3.动态创建页码
    for(i=0;i<lis.length;i++){
        var Lbt_li = document.createElement('li')
    }
    //4.第一个选中
    $('Lbt_ol').children[0].className = 'Lbt_current';

    //5.监听鼠标进入圆点
    var olLis = $('Lbt_ol').children;
    for(var j=0;j<olLis.length;j++){
        (function (j) {
            //5.1获取单独的li标签
            var Lbt_li =olLis[j];
            //5.2鼠标进入
            Lbt_li.onmouseover = function () {
                for(var i=0;i<olLis.length;i++){
                    olLis[i].className = '';
                }
                this.className = "Lbt_current";
                //5.3动起来
                constant($('Lbt_ul'),-(520 * j),60);
                currentIndex =indicatorIndex= j;
            }
        })(j)
    }
    //6.自动轮播
    var timer = setInterval(autoPlay,1000);

    //7.清除和设置定时器
    $('main_top_m_s').onmouseover = function () {
        clearInterval(timer);
        show(right_jiantou);
        show(left_jiantou)
    };
    $('main_top_m_s').onmouseout = function () {
        hide(left_jiantou);
        hide(right_jiantou);
        timer = setInterval(autoPlay,1000);
    };
    //8.点击箭头
    left_jiantou.onclick = function () {
        currentIndex--;
        if(currentIndex  < 0){
            $('Lbt_ul').style.left = 3120;
            currentIndex = 4;
        }
        constant($('Lbt_ul'),-currentIndex * 520,100);
        //圆点滚动
        indicatorIndex--;
        if(indicatorIndex < 0){
            indicatorIndex = 4;
        }
        for(var i=0;i<olLis.length;i++){
            olLis[i].className = '';
        }
        olLis[indicatorIndex].className = "Lbt_current";
    };
    right_jiantou.onclick = function () {
        //图片滚动
        currentIndex++;
        if(currentIndex > lis.length - 1){
            $('Lbt_ul').style.left = 0;
            currentIndex = 1;
        }
        constant($('Lbt_ul'),-currentIndex * 520,100);
        //圆点滚动
        indicatorIndex++;
        if(indicatorIndex > olLis.length - 1){
            indicatorIndex = 0;
        }
        for(var i=0;i<olLis.length;i++){
            olLis[i].className = '';
        }
        olLis[indicatorIndex].className = "Lbt_current";
    };

    function autoPlay () {
        //6.1 ul滚起来
        currentIndex++;
        if(currentIndex > lis.length - 1){
            $('Lbt_ul').style.left = 0;
            currentIndex = 1;
        }
        constant($('Lbt_ul'),-currentIndex * 520,100);
        //6.2指示器滚起来
        indicatorIndex++;
        if(indicatorIndex > olLis.length - 1){
            indicatorIndex = 0;
        }
        for(var i=0;i<olLis.length;i++){
            olLis[i].className = '';
        }
        olLis[indicatorIndex].className = "Lbt_current";
    }


    //4.3
    //1.获取标签
    var lbt_lis = $('lbt_ulul').children;
    var lbt_currentIndex =0,lbt_indicatorIndex =0;
    var left_jiantou_1 = $('main_top_m_x').children[1];
    var right_jiantou_1 = $('main_top_m_x').children[2];
    var span = $('lbt_span');
    //2.克隆li标签
    $('lbt_ulul').appendChild(lbt_lis[0].cloneNode(true));
    //3.动态创建页码
    for(i=0;i<lbt_lis.length;i++){
        var lbt_li = document.createElement('li')
    }
    //4.第一个选中
    $('lbt_olol').children[0].className = 'lbt_current';

    //5.监听鼠标进入圆点
    var lbt_olLis = $('lbt_olol').children;
    for( j=0;j<lbt_olLis.length;j++){
        (function (j) {
            //5.1获取单独的li标签
            var lbt_li =lbt_olLis[j];
            //5.2鼠标进入
            lbt_li.onmouseover = function () {
                for(i=0;i<lbt_olLis.length;i++){
                    lbt_olLis[i].className = '';
                }
                this.className = "lbt_current";
                //5.3动起来
                constant($('lbt_ulul'),-(520 * j),60);
                lbt_currentIndex = lbt_indicatorIndex= j;
                $('lbt_span').innerHTML = (lbt_indicatorIndex+1) + '/6' ;
            }
        })(j)
    }
    //6.自动轮播
    var lbt_timer = setInterval(AutoPlay,1000);

    //7.清除和设置定时器
    $('main_top_m_x').onmouseover = function () {
        clearInterval(lbt_timer);
        show(right_jiantou_1);
        show(left_jiantou_1)
    };
    $('main_top_m_x').onmouseout = function () {
        hide(left_jiantou_1);
        hide(right_jiantou_1);
        lbt_timer = setInterval(AutoPlay,1000);
    };
    //8.点击箭头
    left_jiantou_1.onclick = function () {
        lbt_currentIndex--;
        if(lbt_currentIndex  < 0){
            $('lbt_ulul').style.left = 3640;
            lbt_currentIndex = 4;
        }
        constant($('lbt_ulul'),-lbt_currentIndex * 520,100);
        //圆点滚动
        lbt_indicatorIndex--;
        if(lbt_indicatorIndex < 0){
            lbt_indicatorIndex = 5;
        }
        for(var i=0;i<lbt_olLis.length;i++){
            lbt_olLis[i].className = '';
        }
        lbt_olLis[lbt_indicatorIndex].className = "lbt_current";
        $('lbt_span').innerHTML = (lbt_indicatorIndex+1) + '/6' ;
    };
    right_jiantou_1.onclick = function () {
        //图片滚动
        lbt_currentIndex++;
        if(lbt_currentIndex > lbt_lis.length - 1){
            $('lbt_ulul').style.left = 0;
            lbt_currentIndex = 1;
        }
        constant($('lbt_ulul'),-lbt_currentIndex * 520,100);
        //圆点滚动
        lbt_indicatorIndex++;
        if(lbt_indicatorIndex > lbt_olLis.length - 1){
            lbt_indicatorIndex = 0;
        }
        for(var i=0;i<lbt_olLis.length;i++){
            lbt_olLis[i].className = '';
        }
        lbt_olLis[lbt_indicatorIndex].className = "lbt_current";
        $('lbt_span').innerHTML = (lbt_indicatorIndex+1) + '/6' ;
    };

    function AutoPlay () {
        //6.1 ul滚起来
        lbt_currentIndex++;
        if(lbt_currentIndex > lbt_lis.length - 1){
            $('lbt_ulul').style.left = 0;
            lbt_currentIndex = 1;
        }
        constant($('lbt_ulul'),-lbt_currentIndex * 520,100);
        //6.2指示器滚起来
        lbt_indicatorIndex++;
        if(lbt_indicatorIndex > lbt_olLis.length - 1){
            lbt_indicatorIndex = 0;
        }
        for(var i=0;i<lbt_olLis.length;i++){
            lbt_olLis[i].className = '';
        }
        lbt_olLis[lbt_indicatorIndex].className = "lbt_current";
        $('lbt_span').innerHTML = (lbt_indicatorIndex+1) + '/6' ;
    }
    //4.3
    //1.获取标签
    var tbtt_lis = $('tbtt_ul').children;
    var tbtt_currentIndex =0,tbtt_indicatorIndex =0;
    //2.克隆li标签
    $('tbtt_ul').appendChild(tbtt_lis[0].cloneNode(true));
    //3.动态创建页码
    for(i=0;i<tbtt_lis.length;i++){
        var tbtt_li = document.createElement('li')
    }
    //6.自动轮播
    var tbtt_timer = setInterval(Tbtt_autoPlay,1000);

    //7.清除和设置定时器
    $('main_bottom').onmouseover = function () {
        clearInterval(tbtt_timer);
    };
    $('main_bottom').onmouseout = function () {
        tbtt_timer = setInterval(Tbtt_autoPlay,1000);
    };

    function Tbtt_autoPlay () {
        //6.1 ul滚起来
        tbtt_indicatorIndex++;
        if (tbtt_indicatorIndex > tbtt_lis.length - 1) {
            $('tbtt_ul').style.top = 0;
            tbtt_indicatorIndex = 1;
        }
        constant1($('tbtt_ul'), -tbtt_indicatorIndex * 73, 10);
    }
    //4.4
    var main_right_lis = $('main_right_ul_1').children;
    var main_right_lis2 = $('main_right_ul_2').getElementsByClassName("main_right_ul_2");
    main_right_lis[0].style.borderBottom = 'medium solid red';           //设置下边框的样式
    for(i=0;i<main_right_lis.length;i++){
        var main_right_li = main_right_lis[i];
        main_right_li.index=i;
        main_right_li.onmouseover = function () {
            for(j=0;j<main_right_lis2.length;j++){
                hide(main_right_lis2[j]);
                main_right_lis[j].style.borderBottom = 'none';
            }
            show(main_right_lis2[this.index]);
            main_right_lis[this.index].style.borderBottom = 'medium solid red';
        }
    }
    //4.5分类
    var main_cll = $('main_cll');
    var llxz = $('llxz');
    var chf = $('chonghuafei');
    var ul_fenlei = $('main_right_fenlei').children[0];
    var chf_li = ul_fenlei.children[0];
    var chf_toplis = $('chf_top').children;
    var chf_bottom = $('chf_bottom');
    hide(chf);
    chf_li.onmouseover = function(){
        show(chf);
    };
    chf_li.onmouseout = function(){
        hide(chf);
    };
    main_cll.onclick = function () {
        show(llxz);
    };
    llxz.onmouseover = function(){
      show(llxz)
    };
    main_cll.onmouseout = function () {
      hide(llxz);
    };
    llxz.onmouseout = function () {
        hide(llxz);
    };
    for(i=0;i<chf_toplis.length;i++){
        (function (i) {
            chf_toplis[i].onmouseover = function () {
                var left = (-275 * i);
                chf_bottom.style.left = left + 'px';
            }
        })(i);

    }


    //4.6app
    var main_appEWMlis = $('main_app').getElementsByClassName("main_app");
    var main_appTBlis = $('main_app').getElementsByTagName("a");
    for(i=0;i<main_appTBlis.length;i++){
        (function (i) {
            main_appTBlis[i].onmouseover = function () {
                show(main_appEWMlis[i-1]);
            };
            main_appTBlis[i].onmouseout =function () {
                hide(main_appEWMlis[i-1]);
            }
        })(i);
    }

    //5.1有好货
    var wyewm = $('wyewm');
    var yhh_ewm = $('yhh_ewm');
    wyewm.onmouseover = function () {
      show(yhh_ewm);
    };
    wyewm.onmouseout = function () {
        hide(yhh_ewm);
    };
    //5.2淘抢购
    var tqg1 = 6;var tqg2 = 14;var tqg3 = 63;
    var tqg_fg1 = $('tqg_fg1');var tqg_fg2 = $('tqg_fg2');var tqg_fg3 = $('tqg_fg3');
    var tqg_value1 = $('tqg_value1');var tqg_value2 = $('tqg_value2');var tqg_value3 = $('tqg_value3');
    var tqg_yqsl1 = $('tqg_yqsl1');var tqg_yqsl2 = $('tqg_yqsl2');var tqg_yqsl3 = $('tqg_yqsl3');
    var tqg_xj1 = $('tqg_xj1');var tqg_xj2 = $('tqg_xj2');var tqg_xj3 = $('tqg_xj3');
    var tqg_yj1 = $('tqg_yj1').children[0];var tqg_yj2 = $('tqg_yj2').children[0];var tqg_yj3 = $('tqg_yj3').children[0];
    tqg_fg1 .style.width = (tqg1 * 1.6) + 'px';tqg_fg2 .style.width = (tqg2 * 1.6) + 'px';tqg_fg3 .style.width = (tqg3 * 1.6) + 'px';
    tqg_value1.innerHTML = tqg1 + '%';tqg_value2.innerHTML = tqg2 + '%';tqg_value3.innerHTML = tqg3 + '%';
    tqg_yqsl1.innerHTML = '已抢97件';tqg_yqsl2.innerHTML = '已抢20件';tqg_yqsl3.innerHTML = '已抢1519件';
    tqg_xj1.innerHTML = '￥100';tqg_xj2.innerHTML = '￥1500';tqg_xj3.innerHTML = '￥17.4';
    tqg_yj1.innerHTML = '￥150';tqg_yj2.innerHTML = '￥1990';tqg_yj3.innerHTML = '￥35';
    //5.3中间广告


    //猜你喜欢
    var cnxhlis = $('cnxh').getElementsByClassName('cnxh');
    var zxslis = $('cnxh').getElementsByClassName('zxs');
    for(i=0;i<cnxhlis.length;i++){
        (function (i) {
            cnxhlis[i].onmouseover = function () {
                show(zxslis[i])
            };
            cnxhlis[i].onmouseout = function () {
                hide(zxslis[i])
            }
        })(i);

    }
    //4.1主题市场
    var left_ul = $('main_top_ul_1');
    var left_ul_allLis = left_ul.children;
    var right_ul = $('ul_right');
    var right_ul_allLis = right_ul.children;
    var main_top_m = $('main_top').children[2];
    var main_top_r = $('main_top').children[3];
    for (i=0;i<left_ul_allLis.length;i++){
        (function(){
            var ul_li = left_ul_allLis[i];
            var ul_block = right_ul_allLis[i].children[0];
            ul_li.onmouseover = function () {
                hide(main_top_m);
                hide(main_top_r);
                show(ul_block);
            };
            ul_block.onmouseover = function(){
                hide(main_top_m);
                hide(main_top_r);
                show(ul_block);
            };
            ul_li.onmouseout =function(){
              hide(ul_block);
              show(main_top_m);
              show(main_top_r);
            };
            ul_block.onmouseout = function () {
                hide(ul_block);
                show(main_top_m);
                show(main_top_r);
            }
        })(i);
    }
};
