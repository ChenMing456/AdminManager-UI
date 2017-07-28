/**
 * Created by Domoke on 2017/7/27.
 */
"use strict";

angular.module('account.app_orders', [])
    .factory('AppOrders', function ($resource) {

        return $resource('/v1/adminapi/app_orders/:guid', {guid: '@guid'});
    })
    .service('AppOrderService', function ($http) {

    });