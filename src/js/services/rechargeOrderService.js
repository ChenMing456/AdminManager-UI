/**
 * Created by Domoke on 2017/7/27.
 */
"use strict";

angular.module('account.recharge_orders', [])
    .factory('RechargeOrders', function ($resource) {

        return $resource('/v1/adminapi/recharge_orders/:guid', {guid: '@guid'});
    })
    .service('RechargeOrderService', function ($http) {

    });