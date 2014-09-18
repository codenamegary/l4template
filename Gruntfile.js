module.exports = function (grunt) {
  'use strict';

  // Force use of Unix newlines
  grunt.util.linefeed = '\n';

  RegExp.quote = function (string) {
    return string.replace(/[-\\^$*+?.()|[\]{}]/g, '\\$&');
  };

  var fs = require('fs');
  var path = require('path');

  // Project configuration.
  grunt.initConfig({

    concat: {
      options: {
        stripBanners: true
      },
      bootstrap: {
        src: [
          'bower_components/bootstrap/js/transition.js',
          'bower_components/bootstrap/js/alert.js',
          'bower_components/bootstrap/js/button.js',
          'bower_components/bootstrap/js/carousel.js',
          'bower_components/bootstrap/js/collapse.js',
          'bower_components/bootstrap/js/dropdown.js',
          'bower_components/bootstrap/js/modal.js',
          'bower_components/bootstrap/js/tooltip.js',
          'bower_components/bootstrap/js/popover.js',
          'bower_components/bootstrap/js/scrollspy.js',
          'bower_components/bootstrap/js/tab.js',
          'bower_components/bootstrap/js/affix.js'
        ],
        dest: 'public/js/bootstrap.js'
      },
      app: {
        src: [
          'bower_components/backbone/backbone.js',
          'assets/js/models/**/*.js',
          'assets/js/services/**/*.js',
          'assets/js/views/**/*.js',
          'assets/js/app.js'
        ],
        dest: 'public/js/app.js'
      }
    },

    uglify: {
      options: {
        report: 'min'
      },
      bootstrap: {
        src: '<%= concat.bootstrap.dest %>',
        dest: 'public/js/bootstrap.min.js'
      },
      app: {
        src: '<%= concat.app.dest %>',
        dest: 'public/js/app.min.js'
      }
    },

    less: {
      compileCore: {
        options: {
          strictMath: true,
          sourceMap: true,
          outputSourceFiles: true,
          sourceMapURL: 'bootstrap.css.map',
          sourceMapFilename: 'public/css/bootstrap.css.map'
        },
        files: {
          'public/css/bootstrap.css': 'assets/less/bootstrap.less'
        }
      },
      compileApp: {
        options: {
          strictMath: true,
          sourceMap: true,
          outputSourceFiles: true,
          sourceMapURL: 'app.css.map',
          sourceMapFilename: 'public/css/app.css.map'
        },
        files: {
          'public/css/app.css': [
            'assets/less/app.less',
            'bower_components/fontawesome/less/font-awesome.less'
          ]
        }
      },
      minify: {
        options: {
          cleancss: true,
          report: 'min'
        },
        files: {
          'public/css/bootstrap.min.css': 'public/css/bootstrap.css',
          'public/css/app.min.css': 'public/css/app.css'
        }
      }
    },

    copy: {
      fonts: {
        expand: true,
        cwd: 'bower_components/fontawesome/fonts/',
        src: '*',
        dest: 'public/fonts/'
      },
      jquery: {
        expand: true,
        cwd: 'bower_components/jquery/dist',
        src: '*',
        dest: 'public/js/'
      }
    },

    watch: {
      less: {
        files: 'assets/less/**/*.less',
        tasks: 'less'
      },
      js: {
      	files: 'assets/js/**/*.js',
      	tasks: ['concat', 'uglify']
      }
    }

  });


  // These plugins provide necessary tasks.
  require('load-grunt-tasks')(grunt, {scope: 'devDependencies'});

  // JS distribution task.
  grunt.registerTask('dist-js', ['concat', 'uglify']);

  // CSS distribution task.
  grunt.registerTask('dist-css', ['less']);

  // Default task.
  grunt.registerTask('dist', ['dist-js', 'dist-css', 'copy:fonts', 'copy:jquery']);

  // Default task.
  grunt.registerTask('fonts', ['copy:fonts']);

  // Default task.
  grunt.registerTask('default', ['dist']);

};