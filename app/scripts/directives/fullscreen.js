'use strict';

angular.module('bms')
  .directive('fullscreen', ['$ocLazyLoad', '$document',
  function($ocLazyLoad, $document) {
    return {
      restrict: 'AC',
      link: function(scope, el, attr) {
        el.addClass('hide');
        $ocLazyLoad.load('bower_components/screenfull/dist/screenfull.min.js').then(function(){
          // disable on ie11
          if (screenfull.enabled) {
            el.removeClass('hide');
          }
          el.bind('click', function(){
            var target;
            attr.target && ( target = angular.element(attr.target)[0] );
            screenfull.toggle(target);
          });

          var body = angular.element($document[0].body);
          $document.on(screenfull.raw.fullscreenchange, function () {
            if(screenfull.isFullscreen){
              body.addClass('fullscreen');
            }else{
              body.removeClass('fullscreen');
            }
          });
        });
      }
    };
  }]);
