/**
 * Created by Domoke on 2017/7/27.
 */
"use strict";

angular.module('account.app_recommends', [])
    .factory('AppRecommends', function ($resource) {

        return $resource('/v1/adminapi/app_recommends/:guid', {guid: '@guid'});
    })
    .service('AppRecommendService', function ($http) {

    });