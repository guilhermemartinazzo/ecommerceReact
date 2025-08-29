import "./App.css";
import RouterApp from "./routes"; // mapeia para o index quando nao coloca o arquivo específico
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <>
      <ToastContainer />
      <RouterApp />
    </>
  );
}

export default App;
