/**
 * Created by Domoke on 2017/7/27.
 */
"use strict";

angular.module('account.banners', [])
    .factory('Banners', function ($resource) {

        return $resource('/v1/adminapi/banners/:guid', {guid: '@guid'});
    })
    .service('BannerService', function ($http) {

    });