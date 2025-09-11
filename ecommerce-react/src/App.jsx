import "./App.css";
import RouterApp from "./routes"; // mapeia para o index quando nao coloca o arquivo específico
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import CustomNavBar from "./components/CustomNavBar";


function App() {
  return (
    <>
      <CustomNavBar />
      <ToastContainer />
      <RouterApp />
    </>
  );
}

export default App;
