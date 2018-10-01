/*global $*/



$(document).ready(function () {
    
    "use strict";
// when window scroll navbar change background-color and color
    
    $(window).scroll(function () {
        var wScrollTop = $(this).scrollTop();
        
        if (wScrollTop > 620) {
            
            $('.navbar').css('background-color', '#333');
            
        } else {
            $('.navbar').css('background-color', 'transparent');
        }
        
        // plugin Count to
        if (wScrollTop > 1800) {
             
            $('.time').countTo();
            
            $(window).off('scroll');
        }
    });
    
    //buttons effects
    //buttons effect from-top
    $(".from-top").hover(function () {
        $(this).find('span').eq(0).animate({
            height: '100%'
        }, 200);
    }, function () {
        $(this).find('span').eq(0).animate({
            height: 0
        }, 200);
    });
    //buttons effect from-left
    $(".from-left").hover(function () {
        $(this).find('span').eq(0).animate({
            width: '100%'
        }, 200);
    }, function () {
        $(this).find('span').eq(0).animate({
            width: 0
        }, 200);
    });
    
    //Portfolio active button
    $('.buttons button').click(function () {
        $(this).addClass('active-btn').parent().siblings().find('button').removeClass('active-btn');
        
    });
    
    //shuffel
     $('#Container').mixItUp();
    
    
    //circle progressbar
    
    $('#circle-1').circleProgress({
    value: 0.9,
    size: 200,
    thickness: 8,
    startAngle: 120,
    lineCap: "round",
    emptyFill: "#555",
    animation:{ duration: 3000, easing: "circleProgressEasing" },
    fill: {
      gradient: ["#1ff", "#7af2f2"]
    }
  }).on('circle-animation-progress', function(event, progress) {
    $(this).find('.circle-inner').html(Math.round(90 * progress) + '<i>%</i>');
  });
    
    $('#circle-2').circleProgress({
    value: 0.8,
    size: 200,
    thickness: 8,
    startAngle: 120,
    lineCap: "round",
    emptyFill: "#555",
    animation:{ duration: 3000, easing: "circleProgressEasing" },
    fill: {
      gradient: ["#1ff", "#7af2f2"]
    }
  }).on('circle-animation-progress', function(event, progress) {
    $(this).find('.circle-inner').html(Math.round(80 * progress) + '<i>%</i>');
  });
    $('#circle-3').circleProgress({
    value: 0.65,
    size: 200,
    thickness: 8,
    startAngle: 120,
    lineCap: "round",
    animation:{ duration: 3000, easing: "circleProgressEasing" },
    emptyFill: "#555",
    fill: {
      gradient: ["#1ff", "#7af2f2"]
    }
  }).on('circle-animation-progress', function(event, progress) {
    $(this).find('.circle-inner').html(Math.round(65 * progress) + '<i>%</i>');
  });
    
    $('#circle-4').circleProgress({
    value: 0.70,
    size: 200,
    startAngle: 120,
    thickness: 8,
    lineCap: "round",
    animation:{ duration: 3000, easing: "circleProgressEasing" },
    emptyFill: "#555",
    fill: {
      gradient: ["#1ff", "#7af2f2"]
    }
  }).on('circle-animation-progress', function(event, progress) {
    $(this).find('.circle-inner').html(Math.round(70 * progress) + '<i>%</i>');
  });
    
    
    
});
















