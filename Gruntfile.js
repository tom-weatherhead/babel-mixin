// babel-mixin/Gruntfile.js

'use strict';

module.exports = require('thaw-config').grunt.eslint;

/*
module.exports = grunt => {
	const packageJsonFilename = 'package.json';
	const gruntfile = grunt.file.readJSON(packageJsonFilename);

	grunt.initConfig({
		pkg: gruntfile,
		eslint: {
			target: [
				'*.js',
				'src/*.js' //,
				// 'test/*.js'
			]
		}
	});

	// Tasks
	grunt.loadNpmTasks('grunt-eslint');

	// Aliases
	grunt.registerTask('test', ['eslint']);

	grunt.registerTask('default', ['test']);
};
 */
