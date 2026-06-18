/**
 *  React Slot Machine
 *  Create an extremely biased, web-based slot machine game.
 *
 *  Copyright 2020-2026, Marc S. Brooks (https://mbrooks.info)
 *  Licensed under the MIT license:
 *  http://www.opensource.org/licenses/mit-license.php
 */

'use strict';

import {createElement, useEffect, useRef, useState} from 'react';
import PropTypes from 'prop-types';
import checkPropTypes from 'prop-types/checkPropTypes';
import slotMachine from 'slot-machine-gen';
import 'slot-machine-gen/dist/slot-machine.min.css';

/**
 * Provides React Component wrapper.
 */
export default function SlotMachine(props) {
  const ref = useRef('wrapper');

  checkPropTypes(SlotMachine.propTypes, props);

  const {id = 'slot-machine', reels, callback, options, play} = props;

  const [slot, setSlot] = useState();

  useEffect(() => {
    setSlot(
      new slotMachine(
        ref.current,
        reels,
        callback,
        options
      )
    );
  }, []);

  useEffect(() => {
    if (play) {
      slot.play();
    }
  }, [play]);

  return createElement('div', {ref, id, className: 'slot-machine'});
}

SlotMachine.propTypes = {
  id: PropTypes.string,
  play: PropTypes.bool,
  reels: PropTypes.array.isRequired,
  callback: PropTypes.func,
  options: PropTypes.object
};
