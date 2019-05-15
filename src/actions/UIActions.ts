// Import redux types
import { ActionCreator, Dispatch } from 'redux';
import { ThunkAction } from 'redux-thunk';
import axios from 'axios';

// Import Character Typing
import { IUIState } from '@reducers/UIReducer';

// Create Action Constants
export enum UIActionTypes {
  SET_UI = 'SET_UI',
}

// Interface for Get All Action Type
export interface ISetUIAction {
  type: UIActionTypes.SET_UI;
  uiState: IUIState;
}



/* 
Combine the action types with a union (we assume there are more)
example: export type CharacterActions = IGetAllAction | IGetOneAction ... 
*/
export type UIActions = ISetUIAction;

/* Get All Action
<Promise<Return Type>, State Interface, Type of Param, Type of Action> */
export const setUIState: ActionCreator<
  ThunkAction<Promise<any>, IUIState, null, ISetUIAction>
> = () => {
  return async (dispatch: Dispatch) => {
    try {
      
      dispatch({
        uiState: {
          scheme : 'light'
        },
        type: UIActionTypes.SET_UI,
      });

    } catch (err) {
      console.error(err);
    }
  };
};