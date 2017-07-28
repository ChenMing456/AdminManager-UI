/**
 * Created by Domoke on 2017/7/27.
 */
"use strict";

angular.module('account.articles', [])
    .factory('Articles', function ($resource) {

        return $resource('/v1/adminapi/articles/:guid', {guid: '@guid'});
    })
    .service('ArticleService', function ($http) {

    });