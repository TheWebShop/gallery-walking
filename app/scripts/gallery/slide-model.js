/*global define*/

define([
    'backbone',
    'gallery/utils',
    'backbone-sharepoint'
], function (Backbone, utils) {
    'use strict';

    var SlideModel = Backbone.SP.Item.extend({
        initialize: function() {
            var pic = this.attributes;
            var name = pic.Name.substring(0, pic.Name.lastIndexOf('.'));

            this.set({
                src: pic.__metadata.media_src,
                slug: utils.string_to_slug(name),
                alt: pic.Title,
                width: pic.PictureWidth,
                height: pic.PictureHeight,
                thumb: pic.Path + utils.thumbFromName(pic.Name)
            });
        }
    });

    return SlideModel;
});
