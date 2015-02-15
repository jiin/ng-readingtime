'use strict';

angular.module('ngReadingTime', [])
  .service('readingTime', function() {
    var formats = {
      value_only: function(time) {
        return time;
      },

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

    return {
      get: function(text, custom) {
        if (!text) text = '';

        var words = text.trim().split(/\s+/g).length,
            wps   = (custom.wordsPerMinute || 210) / 60,
            rts   = words / wps;

        var format = (custom.format || 'text_only');

        var m = Math.floor(rts / 60),
            s = Math.round(rts - m * 60);

        var out = formats[format].call(this, {
          minutes: m,
          seconds: s
        });

        return out;
      }
    }
  })
  .directive('ngReadingTime', ['readingTime', function(readingTime) {
    return {
      restrict: 'A',
      scope: {
        textToRead: '=',
        wordsPerMinute: '@?',
        format: '@?'
      },
      replace: true,
      template: '<span>{{txt}}</span>',
      link: function(scope, element, attrs) {

        scope.$watch(function() {
          return scope.textToRead;
        }, function (text) {
          scope.txt = readingTime.get(text, {
            wordsPerMinute: scope.wordsPerMinute,
            format: scope.format
          });
        });

      }
    }
  }]);