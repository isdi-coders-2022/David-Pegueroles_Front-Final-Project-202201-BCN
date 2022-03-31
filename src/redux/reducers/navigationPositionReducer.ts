import { Action, NavigationPositionAction } from "../../types/ActionTypes";
import actionsTypes from "../actions/actionsTypes";

const navigationPositionReducer = (
  navigationPosition: number = 0,
  action: Action = { type: "" }
) => {
  let newNavigationPosition: number;

  if (action.type === actionsTypes.navigationPosition) {
    newNavigationPosition = (action as NavigationPositionAction)
      .navigationPosition;
  } else {
    newNavigationPosition = navigationPosition;
  }

  return newNavigationPosition;
};

export default navigationPositionReducer;
