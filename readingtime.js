'use strict';

angular.module('ngReadingTime', [])
  .directive('ngReadingTime', function() {
    return {
      restrict: 'A',
      scope: {
        textToRead: '=',
        wordsPerMinute: '@?'
      },
      link: function(scope, element, attrs) {

        var words = scope.textToRead.trim().split(/\s+/g).length,
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

        element.html(out);
      }
    }
  });