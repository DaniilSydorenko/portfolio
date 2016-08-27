'use strict';

/**
 * ==============================================================
 * On page load
 * ==============================================================
 */
$(document).ready(function () {
    /**
     * Init all functions
     */
    App.init();

    /**
     * Wow init
     */
    new WOW().init();

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

        // test
        var height = Math.max($(".skills-content").height());
        console.log(height);
    });

    /**
     * Timeline
     */
    App.hideBlocks(App.timelineBlock, App.timelineOffset);

    var map;
        map = new google.maps.Map(document.getElementById('map'), {
            center: {lat: 52.2452118, lng: 20.9881184},
            zoom: 10
        });

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
    //if (App.getCurrentScroll() >= App.shrinkHeader) {
    //    $('.header').addClass('fixed fadeInDown');
    //} else {
    //    $('.header').removeClass('fixed fadeInDown');
    //}

    /**
     * Timeline
     */
    (!window.requestAnimationFrame)
        ? setTimeout(function () {
        App.showBlocks(App.timelineBlock, App.timelineOffset);
    }, 100)
        : window.requestAnimationFrame(function () {
        App.showBlocks(App.timelineBlock, App.timelineOffset);
    });

    let projectSections = App.getProjectSections(),
        firstOffset = projectSections[0].offset;

    var startValue = App.getClosestValue(App.getProjectSectionOffsets(), App.getCurrentScroll());
    let stopValue = startValue + ($('.section-content').height() - 300);

    if ($(window).scrollTop() < firstOffset) {
        $(".section-content").removeClass('active');
    }

    if ($(window).scrollTop() >= startValue) {
        $('[data-offset=' + startValue + ']').find('.flex-box').css('align-items', 'flex-start');

        if (!$(".section-content").hasClass('active')) {
            $('[data-offset=' + startValue + ']').addClass('active');
        } else {
            if (!$('[data-offset=' + startValue + ']').hasClass('active')) {
                $(".section-content").removeClass('active');
                $('[data-offset=' + startValue + ']').addClass('active');
            }
        }
    }

    if ($(window).scrollTop() >= stopValue) {
        if ($('[data-offset=' + startValue + ']').hasClass('active')) {
            $('[data-offset=' + startValue + ']').removeClass('active');
            $('[data-offset=' + startValue + ']').find('.flex-box').css('align-items', 'flex-end');
        }
    }

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
    projectSections: $('.section-content'),

    /* Components */
    hamburger: $(".menu-btn-wrapper"),

    /* Viewport/Window params */
    ih: window.innerHeight,
    oh: window.outerHeight,
    iw: window.innerWidth,
    ow: window.outerWidth,

    /* Const values */
    shrinkHeader: 700,

    /* Timeline */
    timelineBlock: $('.cd-timeline-block'),
    timelineContent: $('.cd-timeline-content'),
    timelineImg: $('.cd-timeline-img'),
    timelineOffset: 0.8,

    /* Contact form */
    inputField: $(".input-field"),

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
        setTimeout(function () {
            $(el[2]).removeClass("fade");
            setTimeout(function () {
                $(el[1]).removeClass("fade");
                setTimeout(function () {
                    $(el[0]).removeClass("fade");
                }, 100);
            }, 150);
        }, 200);
        setTimeout(function () {
            $(".responsiveMobileMenu").removeClass("display");

            setTimeout(function () {
                $(".responsiveMobileMenu").removeClass("flex");

            }, 420);
        }, 540);
    },

    fadeInMenuElements: function () {
        $(".responsiveMobileMenu").addClass("flex");

        setTimeout(function () {
            $(".responsiveMobileMenu").addClass("display");

            setTimeout(function () {
            }, 420);
        }, 20);

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


    toggleResponsiveMobileMenu: function () {

        if ($("#home").hasClass('display')) {
            //menu.toggleClass('open');
            setTimeout(function () {
                //button.toggleClass('open');
                setTimeout(function () {
                    //fadeOutMenuElements
                    App.fadeOutMenuElements();
                }, 10);
            }, 10);


        } else {
            //menu.toggleClass('open');
            setTimeout(function () {
                //button.toggleClass('open');
                setTimeout(function () {
                    //fadeInMenuElements
                    App.fadeInMenuElements();
                }, 10);
            }, 10);
        }

    },

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

    getProjectSections: () => {
        let projectSet = [];
        for (let section of App.projectSections) {
            $(section).attr('data-offset', section.offsetTop);
            projectSet.push({
                offset: section.offsetTop,
                isActive: false
            });
        }
        return projectSet;
    },

    getProjectSectionOffsets: () => {
        let offsets = [];
        for (let ofs of App.getProjectSections()) {
            offsets.push(ofs.offset);
        }
        return offsets;
    },

    getClosestValue: function (offsets, currentScroll) {
        let minVal = Math.min.apply(null, offsets);

        if (currentScroll >= offsets[0] && currentScroll < offsets[1]) {
            return offsets[0];
        } else if (currentScroll >= offsets[offsets.length - 1]) {
            return offsets[offsets.length - 1];
        } else {
            for (let i = 0; i <= offsets.length - 1; i++) {
                if (offsets[i] >= currentScroll) {
                    return offsets[i-1];
                }
            }
        }
    },

     /**
     * On Action Initialization
     */
    init: function () {
        // Hamburger button
        App.hamburger.on("click", function () {
            $(this).toggleClass('open');
            App.toggleResponsiveMobileMenu();
        });

        // Contact form input focus
        App.inputField.on('focus', function() {
            $(this).addClass("active");
        });

        App.inputField.on('focusout', function() {
            var inputVal = $(this).val();
            if (inputVal.length <= 0) {
                $(this).removeClass("active");
            }
        });
    }

};
