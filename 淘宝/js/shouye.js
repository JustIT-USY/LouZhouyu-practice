window.onload = function () {
    //1.顶部导航栏
    // 1.1选择地区
    var Area = $('Area');
    var xiala = $("xiala");
    hide(xiala);
    Area.onmouseover = function () {
        show(xiala);
    };
    xiala.onmouseleave = function(){
      hide(xiala);
    };
    //1.2我的淘宝
    var mytaobao_1 = $('Mytaobao-1');
    var mytaobao_2 = $('Mytaobao-2');
    hide(mytaobao_2);
    mytaobao_1.onmouseover = function () {
        show(mytaobao_2);
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
    var wangwang = dafenlei_1.children[1];
    var ul = dafenlei_1.children[2];
    var allLis = ul.children;
    hide(wangwang);
    for(var i=0;i<allLis.length;i++){
        var li = allLis[i];
        li.onmouseover = function () {
            var offsetLeft = this.offsetLeft;
            wangwang.style.left = (offsetLeft + 5) + 'px';
            show(wangwang);
        };
        li.onmouseout = function () {
            hide(wangwang);
        }
    }
};
