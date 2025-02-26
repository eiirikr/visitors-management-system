import AppNavBar from "./components/AppNavbar";
import DigitalClock from "./components/DigitalClock";
import Timer from "./components/Timer";
import AttendanceForm from "./components/AttendanceForm";
import AppFooter from "./components/AppFooter";
import "./App.css";

function App() {
  return (
    <>
      <AppNavBar />
      <main className="d-flex flex-column flex-lg-row align-items-center justify-content-center gap-4 p-3">
        <section className="clock-container">
          <DigitalClock />
          <Timer />
        </section>
        <AttendanceForm />
      </main>
      <AppFooter />
    </>
  );
}

export default App;
