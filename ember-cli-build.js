'use strict';


// const purgeCSS = {
//   module: require('@fullhuman/postcss-purgecss'),
//   options: {
//     content: [
//       // add extra paths here for components/controllers which include tailwind classes
//       './app/index.html',
//       './app/templates/**/*.hbs',
//       './app/components/**/*.hbs',
//     ],
//     defaultExtractor: content => content.match(/[A-Za-z0-9-_:/]+/g) || [],
//   },
// };
const purgecss = require('@fullhuman/postcss-purgecss');


const EmberApp = require('ember-cli/lib/broccoli/ember-app');

module.exports = function (defaults) {
  let app = new EmberApp(defaults, {
    postcssOptions: {
//      filter: {
//        enabled: true,
//        plugins: [
//          {
//            module: purgecss,
//            options: {
//              content: [
                // add extra paths here for components/controllers which include tailwind classes
//                './app/index.html',
//                './app/templates/**/*.hbs',
//                './app/components/**/*.hbs',
//              ],
//            },
//          },
//        ],
//      },
      compile: {
        enabled: true,
        extension: 'scss',
        parser: require('postcss-scss'),
        plugins: [
          {
            module: require('@csstools/postcss-sass'),
            options: {
              includePaths: ['node_modules'],
            },
          },

          require('tailwindcss')('./tailwind.config.js'),

        ],
      },
    },
    // Add options here
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

  return app.toTree();
};
