import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import AiChat from "./Chat/AiChat";
import Auth from "./Authentication/Auth";
import { BrowserRouter } from "react-router-dom";
import Routes from "./Routes";
import AppNav from './AppNav/AppNav'

function App() {
  return (
    <>
    <BrowserRouter>
    <AppNav/>
      <Routes/>
      <AiChat/>
      <Auth/>
    </BrowserRouter>
    </>
  );
}

export default App;
