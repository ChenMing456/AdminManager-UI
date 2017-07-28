/**
 * Created by Domoke on 2017/7/27.
 */
"use strict";

angular.module('account.app_components', [])
    .factory('AppComponents', function ($resource) {

        return $resource('/v1/adminapi/app_components/:guid', {guid: '@guid'});
    })
    .service('AppComponentService', function ($http) {

    });