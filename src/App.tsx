import { BrowserRouter } from "react-router-dom";
import PagesRouter from "./pages";

function App() {
  return (
    <div className="px-4 sm:px-0 h-screen w-screen overflow-auto bg-[#100e18] pb-5">
      <BrowserRouter>
        <PagesRouter />
      </BrowserRouter>
    </div>
  );
}

export default App;
