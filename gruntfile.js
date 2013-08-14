module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    jshint: {
      options: {
        curly: true,
        eqeqeq: true,
        immed: true,
        latedef: true,
        newcap: true,
        noarg: true,
        sub: true,
        undef: true,
        boss: true,
        eqnull: true,
        globals: {
          'window': true,
          'jQuery': true,
          'document': true
        }
      },
      files: {
        src: ['./src/wColorPicker.js']
      }
    },
    uglify: {
      options: {
        banner: '/*! <%= pkg.name %> - v<%= pkg.version %> - <%= grunt.template.today("yyyy-mm-dd") %> */'
      },
      my_target: {
        files: {
          './wColorPicker.min.js': ['./src/wColorPicker.js']
        }
      }
    },
    stylus: {
      compile: {
        options: {
          import: ['nib', '../lib/mixins'],
        },
        files: {
          './wColorPicker.min.css': './src/wColorPicker.css'
        }
      }
    },
    concat: {
      dist: {
        src: ['./lib/rgbHex.min.js', './wColorPicker.min.js'],
        dest: './wColorPicker.min.js'
      }
    },
    watch: {
      files: ['./src/wColorPicker.js', './src/wColorPicker.css'],
      tasks: ['stylus', 'jshint', 'uglify', 'concat']
    }
  });

  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-stylus');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-concat');

  grunt.registerTask('default', [ 'stylus', 'jshint', 'uglify', 'concat' ]);
};