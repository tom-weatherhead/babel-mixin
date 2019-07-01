// babel-mixin/src/main.js

// A handy add-in for ES6 compatibility wherever we need it.

// How To Enable ES6 Imports in Node.js :
// See https://timonweb.com/posts/how-to-enable-es6-imports-in-nodejs/
// See https://stackoverflow.com/questions/33527653/babel-6-regeneratorruntime-is-not-defined

'use strict';

module.exports = (options = {}) => {
	const config = require('thaw-config');
	const defaultTargetProfileName = 'server';
	const babelOptions = config.babel.getOptions({
		targetOptions: options.targetOptions,
		targetProfileName: options.targetProfileName || defaultTargetProfileName,
		transformClasses: options.transformClasses
	});

	// These babelOptions can then be used in some of our Gruntfiles as options for babel-loader.
	require('@babel/register')(babelOptions);

	// 2019-06-25 :
	// npm WARN deprecated @babel/polyfill@7.4.4: 🚨 As of Babel 7.4.0, this
	// npm WARN deprecated package has been deprecated in favor of directly
	// npm WARN deprecated including core-js/stable (to polyfill ECMAScript
	// npm WARN deprecated features) and regenerator-runtime/runtime
	// npm WARN deprecated (needed to use transpiled generator functions):
	// npm WARN deprecated
	// npm WARN deprecated   > import "core-js/stable";
	// npm WARN deprecated   > import "regenerator-runtime/runtime";

	// So: This:
	// require('@babel/polyfill');

	// ... has been replaced with this:

	if (options.includeCoreJS) {
		require('core-js/stable');
	}

	if (options.includeRegeneratorRuntime) {
		require('regenerator-runtime/runtime');
	}
};
