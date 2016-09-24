var bespoke = require('bespoke'),
  aria3d = require('../../../lib/bespoke-theme-aria3d.js'),
  keys = require('bespoke-keys'),
  touch = require('bespoke-touch'),
  bullets = require('bespoke-bullets'),
  scale = require('bespoke-scale'),
  progress = require('bespoke-progress'),
  backdrop = require('bespoke-backdrop');

bespoke.from('article', [
  aria3d(),
  keys(),
  touch(),
  bullets('li, .bullet'),
  scale(),
  progress(),
  backdrop()
]);
