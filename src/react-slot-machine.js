/**
 *  React Slot Machine
 *  Create an extremely biased, web-based slot machine game.
 *
 *  Copyright 2020, Marc S. Brooks (https://mbrooks.info)
 *  Licensed under the MIT license:
 *  http://www.opensource.org/licenses/mit-license.php
 */

'use strict';

import React          from 'react';
import PropTypes      from 'prop-types';
import SlotMachineGen from 'slot-machine-gen';
import 'slot-machine-gen/dist/slot-machine.min.css';

/**
 * Provides React Component wrapper.
 */
class SlotMachine extends React.Component {
  componentDidMount() {
    this.slot = new SlotMachineGen(
      this.refs.wrapper,
      this.props.reels,
      this.props.callback,
      this.props.options
    );
  }

  componentDidUpdate(prevProps) {
    if (this.props.play !== prevProps.play) {
      this.slot.play();
    }
  }

  render() {
    return (
      <div id={this.props.id} className="slot-machine" ref="wrapper"></div>
    );
  }
};

SlotMachine.defaultProps = {
  id: 'slot-machine',
  play: false,
};

SlotMachine.propTypes = {
  id: PropTypes.string,
  play: PropTypes.bool,
  reels: PropTypes.array.isRequired,
  callback: PropTypes.func,
  options: PropTypes.object
};

export default SlotMachine;
