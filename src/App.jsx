import MainRouter from "./routes/MainRouter";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import NavBarComponent from "./components/NavBarComponent/NavBarComponent";
function App() {
  return (
    <div>
      <NavBarComponent />
      <MainRouter />
    </div>
  );
}
NavBarComponent;
export default App;
