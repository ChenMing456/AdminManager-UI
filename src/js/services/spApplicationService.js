/**
 * Created by Domoke on 2017/7/27.
 */
"use strict";

angular.module('account.sp_applications', [])
    .factory('SpApplications', function ($resource) {

        return $resource('/v1/adminapi/sp_applications/:guid/:', {guid: '@guid'});
    })
    .service('SpApplicationService', function ($http) {

    });