'use strict';

$(function(){
    var timelineBlocks = $('.cd-timeline-block'),
        offset = 0.8;

    //hide timeline blocks which are outside the viewport
    hideBlocks(timelineBlocks, offset);

    //on scolling, show/animate timeline blocks when enter the viewport
    $(window).on('scroll', function(){
        (!window.requestAnimationFrame)
            ? setTimeout(function(){ showBlocks(timelineBlocks, offset); }, 100)
            : window.requestAnimationFrame(function(){ showBlocks(timelineBlocks, offset); });
    });

    function hideBlocks(blocks, offset) {
        blocks.each(function(){
            ( $(this).offset().top > $(window).scrollTop()+$(window).height()*offset ) && $(this).find('.cd-timeline-img, .cd-timeline-content').addClass('is-hidden');
        });
    }

    function showBlocks(blocks, offset) {
        blocks.each(function(){
            ( $(this).offset().top <= $(window).scrollTop()+$(window).height()*offset && $(this).find('.cd-timeline-img').hasClass('is-hidden') ) && $(this).find('.cd-timeline-img, .cd-timeline-content').removeClass('is-hidden').addClass('bounce-in');
        });
    }

    //
    //var h = document.querySelector("#home").offsetHeight,
    //    n = document.querySelector("nav"),
    //    x = h - n.offsetHeight;
    //if (s >= x) {
    //    if (!$(n).hasClass("show")) {
    //        $(n).addClass("show");
    //    }
    //} else {
    //    if ($(n).hasClass("show")) {
    //        $(n).removeClass("show");
    //    }
    //}


    var shrinkHeader = 700;
    $(window).scroll(function() {
        var h = window.innerHeight;
        var scroll = getCurrentScroll();

        if (scroll > h) {
            $("header").addClass("fixed");
        } else {
            $("header").removeClass("fixed");
        }

        if ( scroll >= shrinkHeader ) {
            //$('.header').removeClass('fadeOut');
            $('.header').addClass('animated fadeInDown sd');
        }
        else {
            //$(".header").slideUp(1000, function() {
            //    $('.header').removeClass('animated fadeInDown sd');
            //});
            $('.header').removeClass('fadeInDown');

            //$('.header').addClass('animated fadeOut');

        }
    });
    function getCurrentScroll() {
        return window.pageYOffset || document.documentElement.scrollTop;
    }

    $(".menu-btn-wrapper").on("click", function () {
        $(".mobileMenuOverlay").addClass("flex");

        setTimeout(function(){
            $(".mobileMenuOverlay").addClass("display");

            setTimeout(function(){
            }, 420);
        }, 20);
    });

    function hideMobileMenuItems () {
        var items = $(".mobileMenu li");
        $(items[0]).removeClass("show");
        setTimeout(function(){
            $(items[1]).removeClass("show");
            setTimeout(function(){
                $(items[2]).removeClass("show");
            }, 75);
        }, 75);
    }

    function showMobileMenuItems () {
        var items = $(".mobileMenu li");
        setTimeout(function(){
            $(items[0]).addClass("show");
            setTimeout(function(){
                $(items[1]).addClass("show");
                setTimeout(function(){
                    $(items[2]).addClass("show");
                }, 75);
            }, 75);
        }, 100);
    }

    function toggleMobileMenu () {
        if (!animationRunning) {
            toggleMenuButton();
            if (mobileMenuVisible) {
                // Hide menu
                mobileMenuVisible = false;
                animationRunning = true;
                hideMobileMenuItems();
                setTimeout(function(){
                    $(".mobileMenuOverlay").removeClass("show");
                    setTimeout(function(){
                        $(".mobileMenuOverlay").removeClass("display");
                        animationRunning = false;
                    }, 420);
                }, 100);
            } else {
                // Show menu
                mobileMenuVisible = true;
                animationRunning = true;
                $(".mobileMenuOverlay").addClass("display");
                setTimeout(function(){
                    showMobileMenuItems();
                    $(".mobileMenuOverlay").addClass("show");
                    setTimeout(function(){
                        animationRunning = false;
                    }, 420);
                }, 20);

            }
        }
    }
});

