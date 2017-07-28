/**
 * Created by Domoke on 2017/7/27.
 */
"use strict";

angular.module('account.users', [])
    .factory('Users', function ($resource) {

        return $resource('/v1/adminapi/users/:guid', {guid: '@guid'});
    })
    .service('UserService', function ($http) {

    });