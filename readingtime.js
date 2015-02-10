'use strict';

angular.module('ngReadingTime', [])
  .directive('ngReadingTime', function() {
    return {
      restrict: 'A',
      scope: {
        textToRead: '=',
        wordsPerMinute: '@?'
      },
      replace: true,
      template: '<span>{{txt}}</span>',
      link: function(scope, element, attrs) {

        scope.$watch(function() {
          return scope.textToRead;
        }, function (text) {

          if (!text) text = '';

          var words = text.trim().split(/\s+/g).length,
              wps   = (scope.wordsPerMinute || 210) / 60,
              rts   = words / wps;

          var formats = {
            text_only: function(time) {
              var result = 'readable in ';

              if (!time.minutes && !time.seconds)
                result += 'a moment';

              if (time.minutes)
                result += time.minutes + ' minutes ';

              if (time.seconds)
                result += time.seconds + ' seconds';

              return result;
            }
          };

          var m = Math.floor(rts / 60),
              s = Math.round(rts - m * 60);

          var out = formats.text_only.call(this, {
            minutes: m,
            seconds: s
          });

          scope.txt = out;
        });
      }
    }
  });