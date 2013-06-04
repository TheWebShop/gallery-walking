/*global define*/

define([
    'backbone',
    'gallery/slide-model',
    'backbone-sharepoint'
], function (Backbone, SlideModel) {
    'use strict';

    var SlidesCollection = Backbone.SP.List.extend({
        site: '',
        list: 'sdphotos',
        model: SlideModel
    });

    return SlidesCollection;
});
