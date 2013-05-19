var path;

path = require('path');

module.exports = function(grunt) {
  grunt.initConfig({
    clean: {
      working: {
        src: ['./dist/', './dist_test/', './.temp/']
      },
      jslove: {
        src: ['**/*.coffee', '!**/node_modules/**']
      }
    },
    coffee: {
      scripts: {
        files: [
          {
            cwd: './src/',
            src: 'scripts/**/*.coffee',
            dest: './.temp/',
            expand: true,
            ext: '.js'
          }, {
            cwd: './test/',
            src: 'scripts/**/*.coffee',
            dest: './dist_test/',
            expand: true,
            ext: '.js'
          }
        ],
        options: {
          bare: true
        }
      },
      jslove: {
        files: [
          {
            cwd: './',
            src: ['**/*.coffee', '!**/node_modules/**'],
            dest: './',
            expand: true,
            ext: '.js'
          }
        ],
        options: '<%= coffee.scripts.options %>'
      }
    },
    copy: {
      dev: {
        files: [
          {
            cwd: './.temp/',
            src: '**',
            dest: './dist/',
            expand: true
          }
        ]
      },
      img: {
        files: [
          {
            cwd: './src/',
            src: 'img/**/*.png',
            dest: './.temp/',
            expand: true
          }
        ]
      },
      js: {
        files: [
          {
            cwd: './src/',
            src: 'scripts/**/*.js*',
            dest: './.temp/',
            expand: true
          }, {
            cwd: './src/',
            src: 'scripts/**/*.js*',
            dest: './dist_test/',
            expand: true
          }
        ]
      },
      prod: {
        files: [
          {
            cwd: './.temp/',
            src: ['img/**/*.png', 'scripts/libs/html5shiv-printshiv.js', 'scripts/libs/json2.js', 'scripts/scripts.min.js', 'scripts/scripts.min.js.map', 'scripts/scripts.min.js.src', 'scripts/data/profile.json','styles/styles.min.css', 'views/**/*.html'],
            dest: './dist/',
            expand: true
          }, {
            './dist/index.html': './.temp/index.min.html'
          }
        ]
      },
      index: {
        files: [
          {
            cwd: './.temp/',
            src: 'index.html',
            dest: './dist/',
            expand: true
          }
        ]
      },
      scripts: {
        files: [
          {
            cwd: './.temp/',
            src: 'scripts/**',
            dest: './dist/',
            expand: true
          }
        ]
      },
      styles: {
        files: [
          {
            cwd: './.temp/',
            src: 'styles/**',
            dest: './dist/',
            expand: true
          }
        ]
      },
      views: {
        files: [
          {
            cwd: './.temp/',
            src: 'views/**',
            dest: './dist/',
            expand: true
          }
        ]
      }
    },
    express: {
      livereload: {
        options: {
          port: 3005,
          bases: path.resolve('./dist'),
          debug: true,
          monitor: {},
          server: path.resolve('./server')
        }
      }
    },
    imagemin: {
      img: {
        files: [
          {
            cwd: './src/',
            src: 'img/**/*.png',
            dest: './.temp/',
            expand: true
          }
        ],
        options: {
          optimizationLevel: 7
        }
      }
    },
    less: {
      styles: {
        files: {
          './.temp/styles/styles.css': './src/styles/styles.less'
        }
      }
    },
    minifyHtml: {
      prod: {
        files: {
          './.temp/index.min.html': './.temp/index.html'
        }
      }
    },
    ngTemplateCache: {
      views: {
        files: {
          './.temp/scripts/views.js': './.temp/views/**/*.html'
        },
        options: {
          trim: './.temp'
        }
      }
    },
    regarde: {
      dist: {
        files: './dist/**',
        tasks: 'livereload'
      },
      server: {
        files: ['server.coffee', 'routes.coffee'],
        tasks: 'express-restart:livereload'
      }
    },
    requirejs: {
      scripts: {
        options: {
          baseUrl: './.temp/scripts/',
          findNestedDependencies: true,
          logLevel: 0,
          mainConfigFile: './.temp/scripts/main.js',
          name: 'main',
          onBuildWrite: function(moduleName, path, contents) {
            var modulesToExclude, shouldExcludeModule;

            modulesToExclude = ['main'];
            shouldExcludeModule = modulesToExclude.indexOf(moduleName) >= 0;
            if (shouldExcludeModule) {
              return '';
            }
            return contents;
          },
          optimize: 'uglify2',
          out: './.temp/scripts/scripts.min.js',
          preserveLicenseComments: false,
          generateSourceMaps: true,
          skipModuleInsertion: true,
          uglify: {
            no_mangle: true
          }
        }
      },
      styles: {
        options: {
          baseUrl: './.temp/styles/',
          cssIn: './.temp/styles/styles.css',
          logLevel: 0,
          optimizeCss: 'standard',
          out: './.temp/styles/styles.min.css'
        }
      }
    },
    template: {
      views: {
        files: {
          './.temp/views/': './src/views/**/*.template'
        }
      },
      dev: {
        files: {
          './.temp/index.html': './src/index.template'
        },
        environment: 'dev'
      },
      prod: {
        files: '<%= template.dev.files %>',
        environment: 'prod'
      }
    },
    testacular: {
      unit: {
        options: {
          autoWatch: true,
          browsers: ['Chrome'],
          colors: true,
          configFile: './testacular.conf.js',
          keepalive: true,
          port: 8081,
          reporters: ['progress'],
          runnerPort: 9100,
          singleRun: true
        }
      }
    },
    watch: {
      index: {
        files: './src/index.template',
        tasks: ['template:dev', 'copy:index']
      },
      scripts: {
        files: './src/scripts/**',
        tasks: ['coffee:scripts', 'copy:js', 'copy:scripts']
      },
      styles: {
        files: './src/styles/**/*.less',
        tasks: ['less', 'copy:styles']
      },
      views: {
        files: './src/views/**/*.template',
        tasks: ['template:views', 'copy:views']
      }
    }
  });
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-coffee');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-imagemin');
  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-livereload');
  grunt.loadNpmTasks('grunt-contrib-requirejs');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-express');
  grunt.loadNpmTasks('grunt-hustler');
  grunt.loadNpmTasks('grunt-regarde');
  grunt.loadNpmTasks('grunt-testacular');
  grunt.registerTask('test', ['default', 'testacular']);
  grunt.registerTask('server', ['livereload-start', 'express', 'regarde']);
  grunt.registerTask('jslove', ['coffee:jslove', 'clean:jslove']);
  grunt.registerTask('default', ['clean:working', 'coffee:scripts', 'copy:js', 'less', 'template:views', 'copy:img', 'template:dev', 'copy:dev']);
  grunt.registerTask('dev', ['default', 'watch']);
  return grunt.registerTask('prod', ['clean:working', 'coffee:scripts', 'copy:js', 'less', 'template:views', 'imagemin', 'ngTemplateCache', 'requirejs', 'template:prod', 'minifyHtml', 'copy:prod']);
};
