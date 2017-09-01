const fs = require('fs');
const path = require('path');
const babelrc = JSON.parse(fs.readFileSync(path.join(__dirname, '..', 'babel', '.babelrc')));

module.exports = require('babel-jest').createTransformer(babelrc);