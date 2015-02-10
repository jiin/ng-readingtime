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

```html
<p>
  Reading time: <span ng-reading-time text-to-read="text"></span>
</p>
```

Todo
-------

* Add attribute to define custom words per minute
* Add different kind of output (textual, graphical)