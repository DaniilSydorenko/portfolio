'use strict';

/**
 * ==============================================================
 * On page load
 * ==============================================================
 */
$(document).ready(function () {
    App.init();

    App.showResponsiveMobileMenu();

    App.body.on("click", function () {
        App.fadeInMenuElements();
    });

    /**
     * Video background
     */
    App.scaleVideoContainer();

    App.initBannerVideoSize('.video-container .poster img');
    App.initBannerVideoSize('.video-container .filter');
    App.initBannerVideoSize('.video-container video');

    $(window).on('resize', function () {
        App.scaleVideoContainer();
        App.scaleBannerVideoSize('.video-container .poster img');
        App.scaleBannerVideoSize('.video-container .filter');
        App.scaleBannerVideoSize('.video-container video');
    });

    /**
     * Timeline
     */
    App.hideBlocks(App.timelineBlocks, App.timelineOffset);
});


/**
 * ==============================================================
 * On window scroll
 * ==============================================================
 */
$(window).on("scroll", function () {

    /**
     * Header animation
     */
    if (App.getCurrentScroll() >= App.shrinkHeader) {
        $('.header').addClass('fixed fadeInDown');
    } else {
        $('.header').removeClass('fixed fadeInDown');
    }

    /**
     * Timeline
     */
    (!window.requestAnimationFrame)
        ? setTimeout(function () {
        App.showBlocks(App.timelineBlocks, App.timelineOffset);
    }, 100)
        : window.requestAnimationFrame(function () {
        App.showBlocks(App.timelineBlocks, App.timelineOffset);
    });

});

/**
 * Base application object
 * Consists all needed functionality:
 *  - Video bg
 *  - Header
 *  - Timeline
 *  - Projects
 **/

var App = {

    /* DOM selectors */
    html: $('html'),
    body: $('body'),
    header: $('.header'),
    footer: $('.footer'),
    cookies: $('.cookies'),

    /* Viewport/Window params */
    ih: window.innerHeight,
    oh: window.outerHeight,
    iw: window.innerWidth,
    ow: window.outerWidth,

    /* Const values */
    shrinkHeader: 700,

    /* Timeline */
    timelineBlocks: $('.cd-timeline-block'),
    timelineOffset: 0.8,

    /**
     * Custom functions
     */
    getWindowHeight: function () {
        return App.oh;
    },
    getViewportHeight: function () {
        return App.ih;
    },
    getCurrentScroll: function () {
        return window.pageYOffset || document.documentElement.scrollTop;
    },

    /**
     * Responsive mobile menu
     */
    showResponsiveMobileMenu: function () {
        $(".menu-btn-wrapper").on("click", function () {
            $(".responsiveMobileMenu").addClass("flex");

            setTimeout(function () {
                $(".responsiveMobileMenu").addClass("display");

                setTimeout(function () {
                }, 420);
            }, 20);
        })
    },

    fadeOutMenuElements: function () {

        var el = $(".mobileMenu li");

        $(el[0]).removeClass("show");
        setTimeout(function () {
            $(el[1]).removeClass("show");
            setTimeout(function () {
                $(el[2]).removeClass("show");
            }, 75);
        }, 75);
    },

    fadeInMenuElements: function () {

        var el = $(".mobileMenu li");

        setTimeout(function () {
            $(el[0]).addClass("fade");
            setTimeout(function () {
                $(el[1]).addClass("fade");
                setTimeout(function () {
                    $(el[2]).addClass("fade");
                }, 100);
            }, 150);
        }, 200);
    },

    //toggleMobileMenu: function () {
    //
    //    if (!animationRunning) {
    //        toggleMenuButton();
    //        if (mobileMenuVisible) {
    //            // Hide menu
    //            mobileMenuVisible = false;
    //            animationRunning = true;
    //            hideMobileMenuItems();
    //            setTimeout(function () {
    //                $(".responsiveMobileMenu").removeClass("show");
    //                setTimeout(function () {
    //                    $(".responsiveMobileMenu").removeClass("display");
    //                    animationRunning = false;
    //                }, 420);
    //            }, 100);
    //        } else {
    //            // Show menu
    //            mobileMenuVisible = true;
    //            animationRunning = true;
    //            $(".responsiveMobileMenu").addClass("display");
    //            setTimeout(function () {
    //                showMobileMenuItems();
    //                $(".responsiveMobileMenu").addClass("show");
    //                setTimeout(function () {
    //                    animationRunning = false;
    //                }, 420);
    //            }, 20);
    //
    //        }
    //    }
    //},

    /**
     * Video background
     */
    scaleVideoContainer: function () {

        var height = App.ih + 5;
        var unitHeight = parseInt(height) + 'px';
        $('.homepage-hero-module').css('height', unitHeight);
    },

    initBannerVideoSize: function (element) {

        $(element).each(function () {
            $(this).data('height', $(this).height());
            $(this).data('width', $(this).width());
        });

        this.scaleBannerVideoSize(element);
    },

    scaleBannerVideoSize: function (element) {

        var windowWidth = App.iw,
            windowHeight = App.ih + 5,
            videoWidth,
            videoHeight;

        $(element).each(function () {
            var videoAspectRatio = $(this).data('height') / $(this).data('width');

            $(this).width(windowWidth);

            if (windowWidth < 1000) {
                videoHeight = windowHeight;
                videoWidth = videoHeight / videoAspectRatio;
                $(this).css({'margin-top': 0, 'margin-left': -(videoWidth - windowWidth) / 2 + 'px'});

                $(this).width(videoWidth).height(videoHeight);
            }

            $('.homepage-hero-module .video-container video').addClass('fadeIn animated');

        });
    },

    /**
     * Timeline
     */
    hideBlocks: function (blocks, offset) {
        blocks.each(function () {
            ( $(this).offset().top > $(window).scrollTop() + App.ih * offset ) &&
            $(this).find('.cd-timeline-img, .cd-timeline-content').addClass('is-hidden');
        });
    },

    showBlocks: function (blocks, offset) {
        blocks.each(function () {
            ( $(this).offset().top <= $(window).scrollTop() + App.ih * offset &&
            $(this).find('.cd-timeline-img').hasClass('is-hidden') ) &&
            $(this).find('.cd-timeline-img, .cd-timeline-content').removeClass('is-hidden').addClass('bounce-in');
        });
    },

    /**
     * Initialization
     */
    init: function () {
        // Add logic ...
    }

};
