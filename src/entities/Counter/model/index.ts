import { combine, createEvent, createStore } from 'effector';

export const plus = createEvent();
export const minus = createEvent();

export const $counter = createStore(1)
  .on(plus, (n) => n + 1)
  .on(minus, (n) => n - 1);
export const $counterText = $counter.map((n) => `current value = ${n}`);
export const $counterCombined = combine({ counter: $counter, text: $counterText });
