/*global define*/

define([], function () {
    'use strict';

    var utils = {};

    // Converting a string to slug
    // http://dense13.com/blog/2009/05/03/converting-string-to-slug-javascript/
    utils.string_to_slug = function(string) {
        var str = string.replace(/^\s+|\s+$/g, ''); // trim
        str = str.toLowerCase();

        // remove accents, swap ñ for n, etc
        var from = "àáäâèéëêìíïîòóöôùúüûñç·/_,:;";
        var to   = "aaaaeeeeiiiioooouuuunc------";
        for (var i=0, l=from.length ; i<l ; i++) {
            str = str.replace(new RegExp(from.charAt(i), 'g'), to.charAt(i));
        }

        str = str.replace(/[^a-z0-9 -]/g, '') // remove invalid chars
            .replace(/\s+/g, '-') // collapse whitespace and replace by -
            .replace(/-+/g, '-'); // collapse dashes

        return str;
    }

    // SP2010 automatically generates a jpg thumbnail for all images in Picture Libraries
    // ./LibraryName/PictureName.png -> ./LibraryName/_t/PictureName_png.jpg
    // A great tool for visualizing RegExps is http://www.regexper.com/
    utils.thumbFromName = function(picName) {
        return '/_t/' + picName.replace(/\.([^\.]*)$/, '_$1') + '.jpg';
    }

    return utils;
});
