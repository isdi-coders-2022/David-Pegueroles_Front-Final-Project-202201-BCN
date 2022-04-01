import { combineReducers } from "redux";
import appointmentInfoReducer from "./appointmentInfoReducer";
import dailyAppointmentsReducer from "./dailyAppointmentsReducer";
import navigationPositionReducer from "./navigationPositionReducer";

const rootReducer = combineReducers({
  dailyAppointments: dailyAppointmentsReducer,
  navigationPosition: navigationPositionReducer,
  appointmentInfo: appointmentInfoReducer,
});

export default rootReducer;
