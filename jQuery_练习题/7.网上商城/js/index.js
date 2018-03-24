$(function(){

    //ËÑË÷¿ò
    $("#inputSearch").on("focus",function(){
        if(this.value == this.defaultValue ){
            this.value = "" ;
        }
    }).on("blur",function(){
        if(this.value == "" ){
            this.value = this.defaultValue;
        }
    });

    //µ¼º½²Ëµ¥
    $(".nav li").hover(function(){
        $(this).find(".jnNav").show();
    },function(){
        $(this).find(".jnNav").hide();
    });

    //hot
    $(".promoted").append("<span class='hot'></span>");

    //ÂÖ²¥Í¼
    var $imgs = $("#JS_imgWrap img");
    var $menus = $("#menu a");
    var nowIndex = 0;
    var timer;
    $imgs.each(function(index,elem){
        $(elem).css({
            zIndex: 5- index
        });
    });
    $("#menu a").on("mouseover",function(){
        nowIndex = $(this).index();
        changeImg();
    });
    play();
    $("#jnImgeroll").hover(function(){
        clearInterval(timer);
    },function(){
        play();
    });
    function play(){
        timer = setInterval(function(){
            nowIndex++ ;
            if(nowIndex == $menus.length){
                nowIndex = 0;
            }
            changeImg();
        },1000);
    }
    function changeImg(){
        $menus.eq(nowIndex).addClass("chos").siblings().removeClass("chos");
        $imgs.eq(nowIndex).stop(false,true).fadeIn().siblings().stop(false,true).fadeOut();
    }

    //Æ·ÅÆ»î¶¯
    $("#jnBrandTab li").on("click",function(){
        $(this).addClass("chos").siblings().removeClass("chos");
        $("#jnBrandList").animate({
            left: - $("#jnBrandContent li").innerWidth() * 4 * $(this).index()
        },1000);
    });

    //
    tooltip(".tooltip");
    tooltip("#jnCatalog a");





});