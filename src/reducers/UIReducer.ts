
// Import Reducer type
import { Reducer } from 'redux';
import {
  UIActions,
  UIActionTypes,
} from '@actions/UIActions';

export enum UIPanelType {
  COLUMN = 'COLUMN',
  TAKEOVER = "TAKEOVER"
}

export enum UIThemes {
  DARK = 'dark',
  LIGHT = "light",
  BLUE = 'blue',
  GREEN = 'green'
}

export interface IPanel {
  width? :string,
  featured? : boolean,
  minimized? : boolean,
  type? : UIPanelType,
  theme? : UIThemes
}

// Define the Character type
export interface IUIState {
  scheme? :string;
}

const initialCharacterState: IUIState = {
  scheme: "dark"
};

export const UIReducer: Reducer<IUIState, UIActions> = (
  state = initialCharacterState,
  action
) => {
  switch (action.type) {
    case UIActionTypes.SET_UI: {
      return {
        ...state,
        ...action.uiState
      };
    }
    default:
      return state;
  }
};