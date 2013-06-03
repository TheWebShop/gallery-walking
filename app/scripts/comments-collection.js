/*global define*/

define([
    'underscore',
    'backbone',
    'models/comments-model'
], function (_, Backbone, CommentsModel) {
    'use strict';

    var CommentsCollection = Backbone.Collection.extend({
        model: CommentsModel
    });

    return CommentsCollection;
});