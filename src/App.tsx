import { BrowserRouter } from "react-router-dom";
import PagesRouter from "./pages";

function App() {
  return (
    <div className="h-screen w-screen overflow-auto bg-[#100e18]">
      <BrowserRouter>
        <PagesRouter />
      </BrowserRouter>
    </div>
  );
}

export default App;
