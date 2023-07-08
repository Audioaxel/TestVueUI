import { ti } from 'ts-type-inspector'

export type UIEditModel<T> = {
  // Generic Model to create a working copy
  // Accepts A specified BtoUIModel, never???, rules for rules^^?
  // -> use for inputs, forms, ... 
};

export type BtoUIModel<T> = {
  // Generic Model to create generic validation rules
  // Accepts a Backend Model, never???, rules for rules^^?
  // -> use for rules for inputs, forms, ...
};