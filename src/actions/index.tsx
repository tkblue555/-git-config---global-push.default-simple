import * as constants from '../constants';

export interface IncrementEnthusiasm {
  type: constants.INCREMENT_ENTHUSIASM
}

export interface DecrementEnthusiasm {
  type: constants.DECREMENT_ENTHUSIASM
}

export type EnthusiasmAction = IncrementEnthusiasm | DecrementEnthusiasm

export function incremenentEnthusiasm(): IncrementEnthusiasm {
  return {
    type: constants.INCREMENT_ENTHUSIASM
  }
}

export function decremenentEnthusiasm(): DecrementEnthusiasm {
  return {
    type: constants.DECREMENT_ENTHUSIASM
  }
}
