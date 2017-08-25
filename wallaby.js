module.exports = function (wallaby) {
  
    // Babel, jest-cli and some other modules are located under
    // react-scripts/node_modules, so need to let node.js know about it
    var path = require('path');
    process.env.NODE_PATH +=
      path.delimiter +
      path.join(__dirname, 'node_modules') +
      path.delimiter +
      path.join(__dirname, 'node_modules/react-scripts/node_modules');
    require('module').Module._initPaths();
  
    // Babel needs this
    process.env.NODE_ENV = 'development';
  
    return {
      files: [
        'src/**/*.js',
        'src/**/*.ts',
        'src/**/*.tsx',
        'build/**/*.js',
        '!src/**/*.test.js',
        '!src/**/*.test.ts',
        '!src/**/*.test.tsx',
        'App.js'
      ],
  
      tests: [
        'test/**/*.test.js',
        'test/**/*.test.ts',
        'test/**/*.test.tsx',
        'App.test.js'
      ],
  
      env: {
        type: 'node',
        runner: 'node'
      },
  
      compilers: {
        '**/*.js': wallaby.compilers.babel({
          babel: require('babel-core'),
          presets: ['babel-preset-expo']
        })
      },
  
      setup: (wallaby) => {
        wallaby.testFramework.configure(require('./package.json').jest);
      },
  
      testFramework: 'jest'
    };
  };