/*global define*/

define([
    'jquery',
    'underscore',
    'backbone',
    'marionette',
    'gallery/slide-view',
    'galleria'
], function ($, _, Backbone, Marionette, SlideView) {
    'use strict';

    _.templateSettings = {
         evaluate : /\{\[([\s\S]+?)\]\}/g,
         interpolate : /\{\{([\s\S]+?)\}\}/g
    };

    var GalleryView = Marionette.CollectionView.extend({
        itemView: SlideView,
        loading: new $.Deferred(),
        initialize: function(galleryView) {
            this.collection.fetch({
              orderby: 'Name asc'
            })
            .done(_.bind(this.initGal, this, galleryView));
        },
        initGal: function() {
            var self = this;
            // needed to give Galleria a target
            self.$el.attr('id', 'images');

            Galleria.loadTheme('scripts/vendor/galleria-theme/galleria.classic.js');
            Galleria.run('#carousel', { dataSource: '#images' });
            Galleria.on('loadstart', function(e) {
                var galleria = this
                self.trigger('slideChange', galleria.getIndex());
            });
            Galleria.ready(function() {
                // delay until after first image
                _.defer(function(){
                    self.loading.resolve();
                });
            });
        }
    });

    return GalleryView;
});
