/**
 * Created by Domoke on 2017/7/27.
 */
"use strict";


angular.module('account.pay_types', [])
    .factory('PayTypes', function ($resource) {

        return $resource('/v1/adminapi/pay_types/:guid', {guid: '@guid'});
    })
    .service('PayTypeService', function ($http) {

    });