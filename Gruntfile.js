module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    clean: ['dist/*.js', 'test/testem.tap'],
    jshint: {
      all: ['src/*.js'],
      options: grunt.file.readJSON('.jshintrc')
    },
    concat: {
      build: {
        files: {
          'dist/<%= pkg.name %>.js': [
            'src/*.js' 
          ]
        }
      }
    },
    uglify: {
      options: {
        banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
      },
      build: {
        src: 'dist/<%= pkg.name %>.js',
        dest: 'dist/<%= pkg.name %>.min.js'
      }
    },
    testem: {
      options: {
        launch_in_ci: ['PhantomJS']
      },
      'test/testem.tap': ['test/*.html']
    },
    "qunit-cov": {
      test: {
        minimum: 0.9,
        srcDir: 'src',
        depDirs: ['test'],
        outDir: 'dist/cov',
        testFiles: ['test/*.html']
      }
    },
    plato: {
      options: {
        title: 'Jenkin Grunt Jasmine',
        jshint: grunt.file.readJSON('.jshintrc')
      },
      metrics: {
        files: {
          'dist/metrics': [ 'src/*.js' ]
        }
      }
    }, 
    jasmine : {
		pivotal: {
		  src: 'src/**/*.js',
		  options: {
			specs: 'specs/**/*spec.js',
			helpers: 'specs/helpers/*.js'
		  }
		}
		  
	} 
  });

  // Register tasks.
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-testem');
  grunt.loadNpmTasks('grunt-qunit-cov');
  grunt.loadNpmTasks('grunt-plato');
  grunt.loadNpmTasks('grunt-contrib-jasmine');

  // Default task(s) 
  grunt.registerTask('default', ['jshint', 'testem', 'clean', 'qunit-cov',  'jasmine']);
  grunt.registerTask('jenkins', ['jshint', 'testem', 'clean', 'qunit-cov', 'plato', 'concat', 'uglify', 'jasmine']);

};
