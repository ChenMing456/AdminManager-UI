'use strict';

/**
 * Config for the router
 */
angular.module('app')
    .run(
        ['$rootScope', '$state', '$stateParams',
            function ($rootScope, $state, $stateParams) {
                $rootScope.$state = $state;
                $rootScope.$stateParams = $stateParams;
            }
        ]
    )
    .config(
        ['$stateProvider', '$urlRouterProvider', 'JQ_CONFIG',
            function ($stateProvider, $urlRouterProvider, JQ_CONFIG) {
                var version = localStorage.getItem('app_version');
                $urlRouterProvider
                    .when('', '/access/signin')
                    .otherwise('/404');
                $stateProvider
                    .state('404', {
                        url: '/404',
                        templateUrl: 'tpl/404.html',
                    })
                    .state('access', {
                        url: '/access',
                        template: '<div ui-view class="fade-in-right-big smooth"></div>'
                    })
                    .state('access.signin', {
                        url: '/signin',
                        templateUrl: 'tpl/account_signin.html?v=' + version,
                        resolve: {
                            deps: ['uiLoad',
                                function (uiLoad) {
                                    return uiLoad.load(['js/controllers/signinCtrl.js?v=' + version]);
                                }]
                        }
                    })
                    .state('account', {
                        abstract: true,
                        url: '/account',
                        templateUrl: 'tpl/account.html?v=' + version,
                        resolve: {
                            deps: ['$ocLazyLoad',
                                function ($ocLazyLoad) {
                                    return $ocLazyLoad.load('toaster').then(
                                        function () {
                                            return $ocLazyLoad.load(['js/controllers/indexCtrl.js?v=' + version]);
                                        }
                                    );
                                }]
                        }
                    })
                    .state('account.dashboard', {
                        url: '/dashboard',
                        templateUrl: 'tpl/account_dashboard.html?v=' + version,
                        resolve: {
                            deps: ['$ocLazyLoad',
                                function ($ocLazyLoad) {
                                    return $ocLazyLoad.load(['js/controllers/dashboardCtrl.js?v=' + version]);
                                }]
                        }
                    })
                    .state('account.sp_applications', {
                        url: '/sp_applications',
                        templateUrl: 'tpl/account_sp_applications.html?v=' + version,
                        resolve: {
                            deps: ['$ocLazyLoad',
                                function ($ocLazyLoad) {
                                    return $ocLazyLoad.load(['js/controllers/spApplicationsCtrl.js?v=' + version]);
                                }]
                        }
                    })
                    .state('account.contracts', {
                        url: '/contracts',
                        templateUrl: 'tpl/account_contracts.html?v=' + version,
                        resolve: {
                            deps: ['$ocLazyLoad',
                                function ($ocLazyLoad) {
                                    return $ocLazyLoad.load(['js/controllers/contractsCtrl.js?v=' + version]);
                                }]
                        }
                    })
                    .state('account.versions', {
                        url: '/versions',
                        templateUrl: 'tpl/account_versions.html?v=' + version,
                        resolve: {
                            deps: ['$ocLazyLoad',
                                function ($ocLazyLoad) {
                                    return $ocLazyLoad.load(['js/controllers/versionsCtrl.js?v=' + version]);
                                }]
                        }
                    })
                    .state('account.banners', {
                        url: '/banners',
                        templateUrl: 'tpl/account_banners.html?v=' + version,
                        resolve: {
                            deps: ['$ocLazyLoad',
                                function ($ocLazyLoad) {
                                    return $ocLazyLoad.load(['js/controllers/bannersCtrl.js?v=' + version]);
                                }]
                        }
                    })
                    .state('account.articles', {
                        url: '/articles',
                        templateUrl: 'tpl/account_articles.html?v=' + version,
                        resolve: {
                            deps: ['$ocLazyLoad',
                                function ($ocLazyLoad) {
                                    return $ocLazyLoad.load(['js/controllers/articlesCtrl.js?v=' + version]);
                                }]
                        }
                    })
                    .state('account.app_recommends', {
                        url: '/app_recommends',
                        templateUrl: 'tpl/account_app_recommends.html?v=' + version,
                        resolve: {
                            deps: ['$ocLazyLoad',
                                function ($ocLazyLoad) {
                                    return $ocLazyLoad.load(['js/controllers/appRecommendsCtrl.js?v=' + version]);
                                }]
                        }
                    })
                    .state('account.pay_types', {
                        url: '/pay_types',
                        templateUrl: 'tpl/account_pay_types.html?v=' + version,
                        resolve: {
                            deps: ['$ocLazyLoad',
                                function ($ocLazyLoad) {
                                    return $ocLazyLoad.load(['js/controllers/payTypesCtrl.js?v=' + version]);
                                }]
                        }
                    })
                    .state('account.recharge_orders', {
                        url: '/recharge_orders',
                        templateUrl: 'tpl/account_recharge_orders.html?v=' + version,
                        resolve: {
                            deps: ['$ocLazyLoad',
                                function ($ocLazyLoad) {
                                    return $ocLazyLoad.load(['js/controllers/rechargeOrdersCtrl.js?v=' + version]);
                                }]
                        }
                    })
                    .state('account.app_orders', {
                        url: '/app_orders',
                        templateUrl: 'tpl/account_app_orders.html?v=' + version,
                        resolve: {
                            deps: ['$ocLazyLoad',
                                function ($ocLazyLoad) {
                                    return $ocLazyLoad.load(['js/controllers/appOrdersCtrl.js?v=' + version]);
                                }]
                        }
                    })
                    .state('account.transaction_logs', {
                        url: '/transaction_logs',
                        templateUrl: 'tpl/account_transaction_logs.html?v=' + version,
                        resolve: {
                            deps: ['$ocLazyLoad',
                                function ($ocLazyLoad) {
                                    return $ocLazyLoad.load(['js/controllers/transactionLogsCtrl.js?v=' + version]);
                                }]
                        }
                    })
                    .state('account.notices', {
                        url: '/notices',
                        templateUrl: 'tpl/account_notices.html?v=' + version,
                        resolve: {
                            deps: ['$ocLazyLoad',
                                function ($ocLazyLoad) {
                                    return $ocLazyLoad.load(['js/controllers/noticesCtrl.js?v=' + version]);
                                }]
                        }
                    })
                    .state('account.files', {
                        url: '/files',
                        templateUrl: 'tpl/account_files.html?v=' + version,
                        resolve: {
                            deps: ['$ocLazyLoad',
                                function ($ocLazyLoad) {
                                    return $ocLazyLoad.load(['js/controllers/filesCtrl.js?v=' + version]);
                                }]
                        }
                    })
                    .state('account.instances', {
                        url: '/instances',
                        templateUrl: 'tpl/account_instances.html?v=' + version,
                        resolve: {
                            deps: ['$ocLazyLoad',
                                function ($ocLazyLoad) {
                                    return $ocLazyLoad.load(['js/controllers/instancesCtrl.js?v=' + version]);
                                }]
                        }
                    })
                    .state('account.resources', {
                        url: '/resources',
                        templateUrl: 'tpl/account_resources.html?v=' + version,
                        resolve: {
                            deps: ['$ocLazyLoad',
                                function ($ocLazyLoad) {
                                    return $ocLazyLoad.load(['js/controllers/resourcesCtrl.js?v=' + version]);
                                }]
                        }
                    })
                    .state('account.alarms', {
                        url: '/alarms',
                        templateUrl: 'tpl/account_alarms.html?v=' + version,
                        resolve: {
                            deps: ['$ocLazyLoad',
                                function ($ocLazyLoad) {
                                    return $ocLazyLoad.load(['js/controllers/alarmCtrl.js?v=' + version]);
                                }]
                        }
                    })
                    .state('account.users', {
                        url: '/users',
                        templateUrl: 'tpl/account_users.html?v=' + version,
                        resolve: {
                            deps: ['$ocLazyLoad',
                                function ($ocLazyLoad) {
                                    return $ocLazyLoad.load(['js/controllers/usersCtrl.js?v=' + version]);
                                }]
                        }
                    })
                    .state('account.apps', {
                        url: '/apps',
                        templateUrl: 'tpl/account_apps.html?v=' + version,
                        resolve: {
                            deps: ['$ocLazyLoad',
                                function ($ocLazyLoad) {
                                    return $ocLazyLoad.load(['js/controllers/appsCtrl.js?v=' + version]);
                                }]
                        }
                    })
                    .state('account.app', {
                        url: '/app/:app_guid',
                        template: '<div ui-view  ></div>'
                    })
                    .state('account.app.details', {
                        url: '/details',
                        templateUrl: 'tpl/app/app_details.html?v=' + version,
                        resolve: {
                            deps: ['$ocLazyLoad',
                                function ($ocLazyLoad) {
                                    return $ocLazyLoad.load(['js/controllers/appDetailsCtrl.js?v=' + version]);
                                }]
                        }
                    })
                    .state('account.app.create', {
                        url: '/create',
                        templateUrl: 'tpl/app/app_create.html?v=' + version,
                        resolve: {
                            deps: ['$ocLazyLoad',
                                function ($ocLazyLoad) {
                                    return $ocLazyLoad.load(['js/controllers/appCreateCtrl.js?v=' + version]);
                                }]
                        }
                    })
                    .state('account.app.components', {
                        url: '/components',
                        templateUrl: 'tpl/app/app_components.html?v=' + version,
                        resolve: {
                            deps: ['$ocLazyLoad',
                                function ($ocLazyLoad) {
                                    return $ocLazyLoad.load(['js/controllers/appComponentsCtrl.js?v=' + version]);
                                }]
                        }
                    })
                    .state('account.app.versions', {
                        url: '/versions',
                        templateUrl: 'tpl/app/app_versions.html?v=' + version,
                        resolve: {
                            deps: ['$ocLazyLoad',
                                function ($ocLazyLoad) {
                                    return $ocLazyLoad.load(['js/controllers/appVersionsCtrl.js?v=' + version]);
                                }]
                        }
                    })
                    .state('account.app.comments', {
                        url: '/comments',
                        templateUrl: 'tpl/app/app_comments.html?v=' + version,
                        resolve: {
                            deps: ['$ocLazyLoad',
                                function ($ocLazyLoad) {
                                    return $ocLazyLoad.load(['js/controllers/appCommentsCtrl.js?v=' + version]);
                                }]
                        }
                    })
                    .state('account.app.instances', {
                        url: '/instances',
                        templateUrl: 'tpl/app/app_instances.html?v=' + version,
                        resolve: {
                            deps: ['$ocLazyLoad',
                                function ($ocLazyLoad) {
                                    return $ocLazyLoad.load(['js/controllers/appInstancesCtrl.js?v=' + version]);
                                }]
                        }
                    })
                    .state('account.app.alarms', {
                        url: '/alarms',
                        templateUrl: 'tpl/app/app_alarms.html?v=' + version,
                        resolve: {
                            deps: ['$ocLazyLoad',
                                function ($ocLazyLoad) {
                                    return $ocLazyLoad.load(['js/controllers/appAlarmsCtrl.js?v=' + version]);
                                }]
                        }
                    })
                    .state('account.managers', {
                        url: '/managers',
                        templateUrl: 'tpl/account_managers.html?v=' + version,
                        resolve: {
                            deps: ['$ocLazyLoad',
                                function ($ocLazyLoad) {
                                    return $ocLazyLoad.load(['js/controllers/managersCtrl.js?v=' + version]);
                                }]
                        }
                    })
                    .state('account.settings', {
                        url: '/settings',
                        templateUrl: 'tpl/account_settings.html?v=' + version,
                        resolve: {
                            deps: ['$ocLazyLoad',
                                function ($ocLazyLoad) {
                                    return $ocLazyLoad.load(['js/controllers/settingsCtrl.js?v=' + version]);
                                }]
                        }
                    })
            }
        ]
    );
