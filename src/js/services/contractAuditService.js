/**
 * Created by Domoke on 2017/7/27.
 */
"use strict";

angular.module('account.contract_audits', [])
    .factory('ContractAudits', function ($resource) {

        return $resource('/v1/adminapi/contract_audits/:guid/:', {guid: '@guid'});
    })
    .service('ContractAuditService', function ($http) {

    });