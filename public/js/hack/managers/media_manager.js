/*global define */
define([
    'backbone',
    'hack/views/map',
    'hack/views/intro'
], function (Backbone, Map, Intro) {

    var MediaManager = function(config) {
        this.config = config;
        this.view = null;

        Backbone.on('story:page-change', $.proxy(this.setPage, this));
    };

    MediaManager.prototype.setPage = function(chapter, page) {
        this.chapter = chapter;
        this.page = page;

        if (this.page.map) {
            this.setMap(this.page.map);
        }

        if (this.chapter.map && this.chapter.map.kml) {
            this.map.setKmlUrl(this.chapter.map.kml);
        } else {
            this.map.clearKml();
        }

        if (page.showIntro) {
            this.setIntro(page);
        } else if (this.intro) {
            this.intro.remove();
        }
        
    };

    MediaManager.prototype.setMap = function(options) {
        if (!this.map) {
            this.map = new Map('map', options);
        } else {
            this.map.moveTo(options.center, options.zoom);
        }
    };

    MediaManager.prototype.setIntro = function(page) {
        this.intro = new Intro({
            el: '#intro-container',
            page: page
        }).render();
    };

    return MediaManager;
});
