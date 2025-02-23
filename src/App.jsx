import AppNavBar from "./components/AppNavbar";
import AppFooter from "./components/AppFooter";
import "./App.css";

function App() {
  return (
    <>
      <AppNavBar />
      <div className="container mt-5">
        <h1>Welcome to Our Website</h1>
        <p>This is the homepage content.</p>
      </div>
      <AppFooter />
    </>
  );
}

export default App;
