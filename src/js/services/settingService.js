/**
 * Created by Domoke on 2017/7/27.
 */
"use strict";

angular.module('account.settings', [])
    .factory('Settings', function ($resource) {

        return $resource('/v1/adminapi/settings/:guid', {guid: '@guid'});
    })
    .service('SettingService', function ($http) {

    });