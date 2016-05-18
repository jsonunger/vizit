app.config(function($stateProvider){
    $stateProvider
    // .state('code', {
        // url: '/code/:codeId'
    //     controller: 'RevisionCtrl',
    //     templateUrl: 'js/revisions/revisions.html',
    //     resolve: {
    //         code: function (CodeFactory, $stateParams) {
    //             return CodeFactory.getCode($stateParams.codeId);
    //         },
    //         revision: function (CodeFactory, $stateParams) {
    //             return CodeFactory.getRevision($stateParams.codeId, 0);
    //         }
    //     }
    // })
    .state('revision', {
        url: '/code/:codeId/{revisionNum: int}',
        controller: 'RevisionCtrl',
        templateUrl: 'js/visualize/visualize.html',
        resolve: {
            revision: function (CodeFactory, $stateParams) {
                return CodeFactory.getRevision($stateParams.codeId, $stateParams.revisionNum);
            },
            code: function ($stateParams, CodeFactory) {
                return CodeFactory.getCode($stateParams.codeId);
            }
        }
    })


})
