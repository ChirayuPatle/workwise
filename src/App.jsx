import "./App.css";
import { Router } from "./routes/routes";
import { RouterProvider } from "react-router-dom";

function App() {
  return (
    <>
      <div className="bg-gradient-to-br from-[#ffffff] to-[#d1ffff]">
        <RouterProvider router={Router} />
      </div>
    </>
  );
}

export default App;
