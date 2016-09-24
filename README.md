[![Build Status](https://secure.travis-ci.org/aria3d/bespoke-theme-aria3d.png?branch=master)](https://travis-ci.org/aria3d/bespoke-theme-aria3d)

# bespoke-theme-aria3d

Default bespoke.js theme for ARIA-3D presentations. &mdash; [View demo](http://aria3d.github.io/bespoke-theme-aria3d)

## Download

Download the [production version][min] or the [development version][max], or use a [package manager](#package-managers).

[min]: https://raw.github.com/aria3d/bespoke-theme-aria3d/master/dist/bespoke-theme-aria3d.min.js
[max]: https://raw.github.com/aria3d/bespoke-theme-aria3d/master/dist/bespoke-theme-aria3d.js

## Usage

This theme is shipped in a [UMD format](https://github.com/umdjs/umd), meaning that it is available as a CommonJS/AMD module or browser global.

For example, when using CommonJS modules:

```js
var bespoke = require('bespoke'),
  aria3d = require('bespoke-theme-aria3d');

bespoke.from('#presentation', [
  aria3d()
]);
```

When using browser globals:

```js
bespoke.from('#presentation', [
  bespoke.themes.aria3d()
]);
```

## Package managers

### npm

```bash
$ npm install bespoke-theme-aria3d
```

### Bower

```bash
$ bower install bespoke-theme-aria3d
```

## Credits

This theme was built with [generator-bespoketheme](https://github.com/markdalgleish/generator-bespoketheme).

## License

[MIT License](http://en.wikipedia.org/wiki/MIT_License)
