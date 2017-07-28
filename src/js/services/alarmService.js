/**
 * Created by Domoke on 2017/6/26.
 */
"use strict";

angular.module('account.alarms', [])
    .factory('Alarms', function ($resource) {

        return $resource('/v1/adminapi/alarms/:guid', {guid: '@guid'});
    })
    .service('AlarmService', function ($http) {

    });