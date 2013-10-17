/*global define */
define(['backbone', 'underscore'], function (Backbone, _) {

    var PanelManager = function() {

        var panels = [];

        /**
         * Add panel to manager
         */
        var add = function(panel) {
            panels.push(panel);
        };

        /**
         * Show the content
         *
         */
        var showContent = function(chapter, page) {
            var panel = _.last(panels);
            panel.setCurrentChapter(chapter, page);
            panel.render();
        };

        /**
         * Hide the content
         *
         */
        var hideContent = function() {
            var panel = _.last(panels);
            panel.setCurrentChapter(null);
            panel.render();
        };

        var start = function() {
            _.first(panels).render();
        };

        Backbone.on('story:page-change', showContent);
        Backbone.on('panel:chapter-unselected', hideContent);

        return {
            add: add,
            start: start
        };
    };
    return PanelManager;
});