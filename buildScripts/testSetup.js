//register babbel and tels Mocha that Babbel will transpile before Mocha runs the tests
require('babel-register')();

//disable webpack features  that mocha doesn't understand
// see for example index.js where we  import css but mocha does not understand, so we define an empty function just to catch it.
require.extensions['.css'] = function () {
    
};
