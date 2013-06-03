/*global define*/

define([
    'marionette'
], function (Marionette) {
    'use strict';

    var SlideView = Marionette.ItemView.extend({
        template: '#slide-template',
        initialize: function(collection) {
            this.$el.addClass('showcase-slide');
        }
    });

    return SlideView;
});
