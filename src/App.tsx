import { Navigate, Route, Routes } from "react-router-dom";
import Header from "./components/Header/Header";
import Navigation from "./components/Navigation/Navigation";
import AppointmentPage from "./pages/AppointmentPage/AppointmentPage";
import CalendarPage from "./pages/CalendarPage/CalendarPage";
import FormPage from "./pages/FormPage/FormPage";

function App() {
  return (
    <>
      <Header />
      <Navigation />

      <Routes>
        <Route path="/" element={<Navigate to="/calendar" />} />
        <Route path="/login" element="" />
        <Route path="/calendar">
          <Route index element={<CalendarPage />} />
          <Route
            path="/calendar/appointment/:idAppointment"
            element={<AppointmentPage />}
          />
          <Route path="/calendar/appointment/new" element={<FormPage />} />
        </Route>
        <Route path="*" element="" />
      </Routes>
    </>
  );
}

export default App;
