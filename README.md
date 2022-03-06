# React Slot Machine Generator [![npm version](https://badge.fury.io/js/react-slot-machine-gen.svg)](https://badge.fury.io/js/react-slot-machine-gen) [![](https://img.shields.io/npm/dm/react-slot-machine-gen)](https://www.npmjs.com/package/react-slot-machine-gen)

Create an extremely biased, web-based slot machine game.

![Preview](https://raw.githubusercontent.com/nuxy/slot-machine-gen/master/package.png)

## Features

- Faux-panoramic reel animations (without `<canvas>`)
- Support for single/multi-line reels and pay-lines.
- Pseudo-random selections by configured weight.
- Configurable RNG (to make it less biased)
- Configurable sound clips for reel animations.
- Easy to set-up and customize.

Checkout the [demo](https://nuxy.github.io/slot-machine-gen) for examples of use.

## Dependencies

- [Node.js](https://nodejs.org)

## Installation

Add to an existing [React](https://reactjs.org) project using [YARN](https://yarnpkg.com).

    $ yarn add react-slot-machine-gen

## Usage

```javascript
import React       from 'react';
import SlotMachine from 'react-slot-machine-gen'; // or '../dist/react-slot-machine-gen';

const reels = [
  {
    imageSrc: 'path/to/image.png',
    symbols: [
      {
        title: 'cherry',
        position: 100,
        weight: 2
      },
      {
        title: 'plum',
        position: 300,
        weight: 6
      },
      {
        title: 'orange',
        position: 500,
        weight: 5
      },
      {
        title: 'bell',
        position: 700,
        weight: 1
      },
      {
        title: 'cherry',
        position: 900,
        weight: 3
      },
      {
        title: 'plum',
        position: 1100,
        weight: 5
      }
    }
  },

  // add more reels ...
]

export default class Demo extends React.Component {
  constructor() {
    super();

    this.state = {
      play: false
    };
  }

  playEvent() {
    this.setState({
      play: !this.state.play
    });
  }

  render() {
    return (
      <React.Fragment>
        <SlotMachine reels={reels} play={this.state.play} />

        <button id="play-button" onClick={() => this.playEvent()}>Play</button>
      </React.Fragment>
    );
  }
};
```

## Component Props

| Name     | Type     | Description               |
|----------|----------|---------------------------|
| reels    | Array    | Symbols configuration.    |
| play     | Boolean  | Spins the reels if `true` |
| callback | Function | Returns winning symbols.  |
| options  | Object   | Override game [defaults](https://github.com/nuxy/slot-machine-gen#reels-configuration). |

## Documentation

- [Methods](https://github.com/nuxy/slot-machine-gen#methods)
- [Reels configuration](https://github.com/nuxy/slot-machine-gen#reels-configuration)
- [Game options](https://github.com/nuxy/slot-machine-gen#game-options)
- [Callback](https://github.com/nuxy/slot-machine-gen#callback)
- [Customizing symbols](https://github.com/nuxy/slot-machine-gen#customizing-symbols)

## Developers

### CLI options

Run [ESLint](https://eslint.org) on project sources:

    $ npm run lint

Transpile ES6 sources (using [Babel](https://babeljs.io)) and minify to a distribution:

    $ npm run build

Bundle [demo](https://github.com/nuxy/react-slot-machine-gen/tree/master/demo) sources (using [Webpack](https://webpack.js.org)):

    $ npm run webpack

## Contributions

If you fix a bug, or have a code you want to contribute, please send a pull-request with your changes. (Note: Before committing your code please ensure that you are following the [Node.js style guide](https://github.com/felixge/node-style-guide))

## Versioning

This package is maintained under the [Semantic Versioning](https://semver.org) guidelines.

## License and Warranty

This package is distributed in the hope that it will be useful, but without any warranty; without even the implied warranty of merchantability or fitness for a particular purpose.

_react-slot-machine-gen_ is provided under the terms of the [MIT license](http://www.opensource.org/licenses/mit-license.php)

## Author

[Marc S. Brooks](https://github.com/nuxy)
