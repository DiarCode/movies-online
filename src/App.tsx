import { BrowserRouter } from "react-router-dom";
import { QueryClientProvider } from "@tanstack/react-query";
import PagesRouter from "./pages";
import { queryClient } from "./api";

function App() {
  return (
    <div className="px-4 sm:px-0 h-screen w-screen overflow-auto bg-[#100e18] pb-5">
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <PagesRouter />
        </BrowserRouter>
      </QueryClientProvider>
    </div>
  );
}

export default App;
