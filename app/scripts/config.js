/*global require*/
'use strict';

require.config({
    deps: ['main'],
    paths: {
        'jquery': '../components/jquery/jquery',
        'underscore': '../components/underscore-amd/underscore',
        'backbone': '../components/backbone-amd/backbone',
        'backbone.wreqr': '../components/backbone.wreqr/lib/amd/backbone.wreqr',
        'backbone.eventbinder': '../components/backbone.eventbinder/lib/amd/backbone.eventbinder',
        'backbone.babysitter': '../components/backbone.babysitter/lib/amd/backbone.babysitter',
        'marionette': '../components/marionette/lib/core/amd/backbone.marionette',
        'backbone-sharepoint': 'vendor/backbone-sharepoint.odata-amd',
        'bootstrap': 'vendor/bootstrap',
        'galleria': '../components/jquery-galleria/src/galleria'
    },
    shim: {
        'underscore': {
            exports: '_'
        },
        'bootstrap': {
            deps: ['jquery'],
            exports: 'jquery'
        },
        'galleria': {
            deps: ['jquery'],
            exports: 'jquery'
        }
    }
});
