/**
 * Created by Domoke on 2017/7/27.
 */
"use strict";

angular.module('account.files', [])
    .factory('Files', function ($resource) {

        return $resource('/v1/adminapi/files/:guid', {guid: '@guid'});
    })
    .service('FileService', function ($http) {

    });