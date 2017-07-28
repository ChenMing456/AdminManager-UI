/**
 * Created by Domoke on 2017/7/27.
 */
"use strict";

angular.module('account.managers', [])
    .factory('Managers', function ($resource) {

        return $resource('/v1/adminapi/managers/:guid', {guid: '@guid'});
    })
    .service('ManagerService', function ($http) {

    });