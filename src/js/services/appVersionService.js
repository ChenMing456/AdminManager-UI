/**
 * Created by Domoke on 2017/7/27.
 */
"use strict";

angular.module('account.app_versions', [])
    .factory('AppVersions', function ($resource) {

        return $resource('/v1/adminapi/app_versions/:guid/:', {guid: '@guid'});
    })
    .service('AppVersionService', function ($http) {

    });