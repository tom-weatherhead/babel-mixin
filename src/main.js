// babel-mixin/src/main.js

// A handy add-in for ES6 compatibility wherever we need it.

// How To Enable ES6 Imports in Node.js :
// See https://timonweb.com/posts/how-to-enable-es6-imports-in-nodejs/
// See https://stackoverflow.com/questions/33527653/babel-6-regeneratorruntime-is-not-defined

'use strict';

module.exports = (options = {}) => {
	const config = require('thaw-config');
	let targets;

	switch (options.profile) {
		case 'client':
			targets = config.babel.client;
			break;

		// case 'server':
		default:
			targets = config.babel.server;
			break;
	}

	if (!targets) {
		throw new Error(`babel-mixin: Unrecognized profile name '${options.profile}'.`);
	}

	// Transpile all code following this line with babel and use 'env' (aka ES6) preset.
	require('@babel/register')({
		// See https://babeljs.io/docs/en/next/babel-register.html
		// See https://babeljs.io/docs/en/next/options
		// See https://babeljs.io/docs/en/next/options#plugin-preset-entries
		// The configuration below matches the configuration of Babel in the Gruntfile.
		presets: [[ '@babel/preset-env', {
			targets: targets
		}]]
	});

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
	// require('core-js/stable');
	// require('regenerator-runtime/runtime');
};
