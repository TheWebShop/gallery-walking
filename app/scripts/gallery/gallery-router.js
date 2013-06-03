/*global define*/

require([
    'marionette'
], function (Marionette) {
    var GalleryRouter = Marionette.AppRouter.extend({
        appRoutes : {
            '': 'gotoStart',
            'photo/:slug': 'gotoPhoto'
        }
    });

    return GalleryRouter;
});
