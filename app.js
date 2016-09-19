/**
 * Created by Administrator on 2016/9/3.
 */
//主入口模块

'use strict'

angular.module('appModule',[
 'config',
    'ui.router',
    'listModule.controller',
    'detailModule.controller',

])

.controller('appController',['$scope',function($scope){

    }])

.config(['$stateProvider','urlRouteProvider',function($stateProvider,urlRouteProvider){

        $stateProvider
            .state('list',{
                url:"/list:type",
                templateUrl:'areas/list/list_controller.html',
                controller:'listController'
            })
            .state('detail',{
                url:"/detail:type",
                templateUrl:'./areas/detail/detail.html',
                controller:'detailController'
            })

        $UrlRouterProvider.otherwise("/list/in_theaters");
    }])

//huangfnag