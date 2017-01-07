/*
 * @Author: QCF
 * @Date:   2016-12-20 14:19:39
 * @Last Modified by:   QCF
 * @Last Modified time: 2016-12-20 14:38:50
 */

'use strict';
$(function() {

    $(".dropdown").click(function() {
        $(this).children().first().toggleClass('add');

        $(this).children().first().children().last().toggleClass('htransform');


    });

    $(".headiv").click(function() {
        if ($(this).hasClass("icon-unfold")) {
            $(this).css("width", "47px");
            $(this).removeClass("icon-unfold");
            $(this).addClass("icon-fold");
            $(this).next().css({
                width: "47px",
                overflow: "hidden"
            });
            $(this).parent().next().css("margin-left", "47px");


        } else {
            $(this).css("width", "180px");
            $(this).removeClass("icon-fold");
            $(this).addClass("icon-unfold");
            $(this).next().css({
                width: "180px"
            });
            $(this).parent().next().css("margin-left", "180px")

        }

    });
    $(".btn").click(function() {
            console.log("123");
            $(this).children().first().toggleClass('otransform');
            $(this).children().first().toggleClass('ctransform');
        }

    );

    $(window).resize(function() {
        console.log("123");
        myEcharts();
    });
    // 二维码
    $(".Ewm").mouseover(function() {
        $(this).children().last().css("display", "block")

    });
    $(".Ewm").mouseout(function() {
        $(this).children().last().css("display", "none")

    });



})

// 环形图
