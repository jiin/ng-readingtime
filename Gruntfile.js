module.exports = function(grunt) {

  grunt.initConfig({
    web_server: {
      options: {
        cors: true,
        port: 8000,
        nevercache: true,
        logRequests: true
      },
      foo: 'bar'
    },
    uglify: {
      my_target: {
        files: {
          'dist/ng-readingtime.min.js': ['readingtime.js']
        }
      }
    },
    jshint: {
      files: ['Gruntfile.js', 'src/**/*.js', 'test/**/*.js'],
      options: {
        globals: {
          jQuery: true
        }
      }
    },
    watch: {
      files: ['<%= jshint.files %>'],
      tasks: ['jshint']
    }
  });

  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-web-server');
  grunt.loadNpmTasks('grunt-contrib-uglify');

  grunt.registerTask('default', ['jshint']);

};