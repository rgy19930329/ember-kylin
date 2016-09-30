/*jshint node:true*/
/* global require, module */
var EmberApp = require('ember-cli/lib/broccoli/ember-app');

module.exports = function(defaults) {
  var app = new EmberApp(defaults, {
    // Add options here
    lessOptions: {
      paths: [
        'app/styles/app'
      ],
      sourceMap: false
    },
    babel: {
      comments: false,
      optional: ['es7.decorators'],
      includePolyfill: true,
      only: [
        './components/*.js',
        './business/**/*.js',
        './mixins/*.js',
        './models/*.js',
        './transitions/*.js',
        './helpers/*.js',
        './*.js'
      ]
    },
    'ember-cli-qunit': { // turn off jshint
      useLintTree: false
    },

  });

  // Use `app.import` to add additional libraries to the generated
  // output files.
  //
  // If you need to use different assets in different
  // environments, specify an object as the first parameter. That
  // object's keys should be the environment name and the values
  // should be the asset to use in that environment.
  //
  // If the library that you are including contains AMD or ES6
  // modules that you would like to import into your application
  // please specify an object with the list of modules as keys
  // along with the exports of each module as its value.

  app.import('bower_components/bootstrap/dist/js/bootstrap.min.js');
  app.import('bower_components/bootstrap/dist/css/bootstrap.css');

  app.import('vendor/lodash/lodash.min.js');
  app.import('vendor/global.js')

  return app.toTree();
};
