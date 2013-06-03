/*global define*/

define([
    'jquery',
    'marionette',
    'gallery/slides-collection',
    'gallery/gallery-view',
    'backbone-sharepoint'
], function ($, Marionette, SlidesCollection, GalleryView) {
    'use strict';
    var Gallery = Marionette.Layout.extend({
        template: "#gallery-template",

        regions: {
            carousel: "#carousel"
        },
        loading: new $.Deferred(),
        onRender: function() {
            var self = this;
            this.slides = new SlidesCollection();

            this.galleria = new GalleryView({
                collection: this.slides
            });
            this.galleria.loading.done(function() {
                self.loading.resolve();
            });
            // pass the event up the from the view to the layout
            this.galleria.on('slideChange', function(slideIndex){
                var slide = self.slides.get(slideIndex + 1);
                self.trigger('slideChange', slide);
            });

            this.carousel.show(this.galleria);
        }
    });

    return Gallery;
});
