import { combineReducers } from "redux";
import appointmentsReducer from "./dailyAppointmentsReducer";

const rootReducer = combineReducers({
  dailyAppointments: appointmentsReducer,
});

export default rootReducer;
