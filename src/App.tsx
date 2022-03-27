import { Navigate, Route, Routes } from "react-router-dom";
import Header from "./components/Header/Header";
import Navigation from "./components/Navigation/Navigation";
import CalendarPage from "./pages/CalendarPage/CalendarPage";

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
          <Route path="/calendar/:idAppointment" element="" />
        </Route>
        <Route path="*" element="" />
      </Routes>
    </>
  );
}

export default App;
