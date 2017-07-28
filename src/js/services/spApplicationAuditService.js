/**
 * Created by Domoke on 2017/7/27.
 */
"use strict";

angular.module('account.sp_application_audits', [])
    .factory('SpApplicationAudits', function ($resource) {

        return $resource('/v1/adminapi/sp_application_audits/:guid/:', {guid: '@guid'});
    })
    .service('SpApplicationAuditService', function ($http) {

    });