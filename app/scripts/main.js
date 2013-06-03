require([
    'jquery',
    'backbone',
    'marionette',
    'gallery/gallery-layout'
], function ($, Backbone, Marionette, Gallery) {
    var App = new Backbone.Marionette.Application();

    App.addRegions({
        main: '#main'
    });

    App.gallery = new Gallery({
        site: '/msd/ewd/wellness',
        list: 'WalkingChallenge'
    });

    var myRouter = Marionette.AppRouter.extend({
        routes : {
            'photo/:slug': 'gotoPhoto'
        },
        gotoPhoto: function(slug){
            var matches = App.gallery.slides.where({slug: slug});
            if (matches.length == 0) return alert('Sorry, no such photo: ' + slug);
            var slideIndex = App.gallery.slides.indexOf(matches[0]);

            App.gallery.carousel.$el.data('galleria').show(slideIndex)
        }
    });

    App.router = new myRouter({
      app: App
    });

    App.gallery.on('slideChange', function(slide){
        var slug = slide.get('slug');

        App.router.navigate('photo/' + slug);
    });

    App.on('initialize:after', function() {
        App.main.show(App.gallery);
    });

    // Don't start the router until the Gallery is done building
    // This way we catch specific slide requests
    App.gallery.loading.done(function() {
        Backbone.history.start();
    });

    $(document).ready(function($) {
        App.start();
    });


});
