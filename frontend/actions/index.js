import * as types from './types';

export function setTimes(times) {
  return {
    type: types.SET_TIMES,
    times,
  };
}

// layOutDay([
//   {start:   0, end: 150},
//   {start:   0, end: 360},
//   {start:   0, end: 600},
//   {start:  20, end: 360},
//   {start:  20, end: 360},
//   {start: 100, end: 300},
//   {start: 150, end: 400},
//   {start: 160, end: 350},
//   {start: 310, end: 600},
//   {start: 400, end: 600},
//   {start: 400, end: 600},
//   {start: 400, end: 600},
//   {start: 410, end: 600},
//   {start: 420, end: 600},
//   {start: 600, end: 660},
//   {start: 600, end: 720},
//   {start: 600, end: 720},
//   {start: 660, end: 720},
// ]);
