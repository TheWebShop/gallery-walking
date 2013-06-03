/*global define*/

define([
    'underscore',
    'backbone',
], function (_, Backbone) {
    'use strict';

    var CommentModel = Backbone.Model.extend({
        defaults:{
        }
    });

    return CommentModel;
});