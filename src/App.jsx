import AppNavBar from "./components/AppNavbar";
import Timer from "./components/Timer";
import AppFooter from "./components/AppFooter";
import "./App.css";
import AttendanceForm from "./components/AttendanceForm";

function App() {
  return (
    <>
      <AppNavBar />
      <main className="d-flex flex-column flex-lg-row align-items-center justify-content-center gap-4 p-3">
        <Timer />
        <AttendanceForm />
      </main>
      <AppFooter />
    </>
  );
}

export default App;
