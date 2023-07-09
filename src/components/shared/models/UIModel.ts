import { ti } from 'ts-type-inspector'

export type UIEditModel<T> = {
  // Generic Model to create a working copy
  // Accepts A specified BtoUIModel, never???, rules for rules^^?
  // -> use for inputs, forms, ... 
};

export type BtoUIModel<T> = {
  // Generic Model to transfer data from backend to frontend
  // Accepts a Backend Model, never???, rules for rules^^?
};