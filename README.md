ng-readingtime
===============

Just an angular.js directive to get reading time of given text

Install
-------

```
bower install ng-readingtime
```

or download readingtime.js or dist/ng-readingtime.min.js.
Include the readingtime.js script provided in bower_components and add `ngReadingTime` in your app's dependencies. 

Usage
-------

You can use as directive:

```html
<p>
  Reading time: <span ng-reading-time text-to-read="text"></span>
</p>
```

or as service:
```javascript
.directive('myCustomDirective', ['readingTime', function(readingTime) {
  return {
    // ... skipped code
    link: function() {
      scope.result = readingTime.get(text, {
        wordsPerMinute: 210,
        format: 'text_only'
      });
    }
  }
}]);
```

This directive has also two customizable attributes: _wordsPerMinute_ and _format_.
The first represents the words that the user can reads in a minute (default is 210) and the second is the output format.
At the moment ng-readingtime supports only 2 formats:
* text_only: string like "readable in 5 minutes and 20 seconds"
* value_only: object with minutes and seconds



Todo
-------

* Add internationalization to textual output
* Add graphical output