import { combineReducers } from "redux";
import dailyAppointmentsReducer from "./dailyAppointmentsReducer";
import navigationPositionReducer from "./navigationPositionReducer";

const rootReducer = combineReducers({
  dailyAppointments: dailyAppointmentsReducer,
  navigationPosition: navigationPositionReducer,
});

export default rootReducer;
