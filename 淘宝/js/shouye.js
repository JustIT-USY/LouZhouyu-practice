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
};