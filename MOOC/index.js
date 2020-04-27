window.onload = function () {
    //吸顶
    var top = document.getElementById("top");
    window.onscroll = function () {
        var h = document.documentElement.scrollTop || document.body.scrollTop;
        if(h>=72){
            top.style.position = "fixed";
            top.style.top = 0;
        }else{
            top.style.position = "relative";
        }
    };
    //顶部搜索框
    var input = document.getElementById('ss_input');
    var input_val = input.value;

    var ss_y = document.getElementById('ss_y');
    input.onfocus = function () {
        if(input_val==="请输入关键字..."){
            input.value ='';
        }
        ss_y.style.display = 'none';
    };
    input.onblur = function () {
        if(input_val===""){
            input.value ='请输入关键字...';

        }
        ss_y.style.display = 'block';
    };

    //顶部右侧隐藏
    var xzAPP = document.getElementById('top_y1');
    var xiazaiAPP = document.getElementById("xiazaiApp");
    xzAPP.onmouseover = function () {
        xiazaiAPP.style.display = 'block';
    };
    xiazaiAPP.onmouseover = function(){
        xiazaiAPP.style.display = 'block';
    };
    xiazaiAPP.onmouseleave = function(){
        xiazaiAPP.style.display = 'none';
    };
    xzAPP.onmouseleave = function () {
        xiazaiAPP.style.display = 'none';
    };
//中部导航栏
    var bz_li = document.getElementsByClassName("bz_li");
    var bzyc_li = document.getElementsByClassName("bzyc_li");
    var bz_yincang = document.getElementById("bz_yincang");
    for(var i=0;i<bz_li.length;i++){
        (function () {
            var li=bz_li[i];
            var yc_li = bzyc_li[i];
            var a=li.children;
            li.onmouseover = function () {
                bz_yincang.style.zIndex = 1;
                yc_li.style.display = 'block';
                for(var j=0;j<3;j++){
                    a[j].className = 'bb';
                }
            };
            li.onmouseleave = function () {
                bz_yincang.style.zIndex = -1;
                yc_li.style.display = 'none';
                for(var j=0;j<3;j++){
                    a[j].className = 'aa';
                }
            }
        })(i);
    }

    //    轮播图
    var by_img = document.getElementById('by_img');
    var zuojt = document.getElementById('zuojt');
    var youjt = document.getElementById('youjt');
    var by_num = 0;
    var by_timer = null;
    function by_autoPlay(num){
        by_timer = setInterval((function () {
            num++;
            by_img.src = 'img/轮播图/'+ num%6 + '.jpg';
            by_num=num;
        }),3000)
    }
    by_autoPlay(by_num);
    zuojt.onclick = function(){

    };
    zuojt.onclick = function(){

    };
    by_img.onmouseover = function () {
        clearInterval(by_timer);
    };
    by_img.onmouseout = function () {
        by_autoPlay(by_num);
    };

//    路线
    var lx_spans = document.getElementsByClassName("lx_span");
    var lx_uls = document.getElementById('lx_nr').getElementsByTagName("ul");
    for(i=0;i<lx_spans.length;i++){
        (function () {
            var span =lx_spans[i];
            var ul =lx_uls[i];
            span.onclick = function () {
                var lx_id = document.getElementById('lx_a');
                lx_id.id = '';
                for(var j=0;j<lx_uls.length;j++){
                    lx_uls[j].style.display = 'none';
                }
                ul.style.display = 'block';
                span.id = 'lx_a';
            }
        })(i);
    }

//    课程
    var hl_spans = document.getElementsByClassName("hl_span");
    var hl_uls = document.getElementById('hl_nr').getElementsByTagName("ul");
    for(i=0;i<hl_spans.length;i++){
        (function () {
            var span =hl_spans[i];
            var ul =hl_uls[i];
            span.onclick = function () {
                var hl_id = document.getElementById('hl_a');
                hl_id.id = '';
                for(var j=0;j<hl_uls.length;j++){
                    hl_uls[j].style.display = 'none';
                }
                ul.style.display = 'block';
                span.id = 'hl_a';
            }
        })(i);
    }

};
