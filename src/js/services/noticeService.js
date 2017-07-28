/**
 * Created by Domoke on 2017/7/27.
 */
"use strict";

angular.module('account.notices', [])
    .factory('Notices', function ($resource) {

        return $resource('/v1/adminapi/notices/:guid', {guid: '@guid'});
    })
    .service('NoticeService', function ($http) {

    });