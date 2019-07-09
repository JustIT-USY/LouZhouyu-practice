window.onload = function () {
    //1.顶部导航栏
    // 1.1选择地区
    var Area = $('Area');
    var xiala = $("xiala");
    hide(xiala);
    Area.onmouseover = function () {
        show(xiala);
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

    //4.1主题市场
    var left_ul = $('main_top_ul_1');
    var left_ul_allLis = left_ul.children;
    var right_ul = $('ul_right');
    var right_ul_allLis = right_ul.children;
    for (i=0;i<left_ul_allLis.length;i++){
        var ul_li = left_ul_allLis[i];
        (function(i){
            var ul_block = right_ul_allLis[i].children[0];
            ul_li.onmouseover = function () {
                show(ul_block);
            };
            ul_block.onmouseover = function(){
                show(ul_block)
            };
            ul_li.onmouseout =function(){
              hide(ul_block)  ;
            };
            ul_block.onmouseout = function () {
                hide(ul_block);
            }
        })(i);
    }
};
