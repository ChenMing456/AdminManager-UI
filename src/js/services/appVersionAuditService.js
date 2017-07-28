/**
 * Created by Domoke on 2017/7/27.
 */
"use strict";

angular.module('account.app_version_audits', [])
    .factory('AppVersionAudits', function ($resource) {

        return $resource('/v1/adminapi/app_version_audits/:guid/:', {guid: '@guid'});
    })
    .service('AppVersionAuditService', function ($http) {

    });