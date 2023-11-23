import MainRouter from "./routes/MainRouter";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
function App() {
  return (
    <div>
      <NavBarComponent />
      <MainRouter />
    </div>
  );
}

export default App;
