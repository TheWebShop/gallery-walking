/*global define*/

define([
    'backbone',
    'gallery/slide-model',
    'backbone-sharepoint'
], function (Backbone, SlideModel) {
    'use strict';

    var SlidesCollection = Backbone.SP.List.extend({
        site: '/msd/ewd/wellness',
        list: 'WalkingChallenge',
        model: SlideModel
    });

    return SlidesCollection;
});
