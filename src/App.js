import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Root } from "./pages/Root/Root";
import { Inicio } from "./pages/Inicio/Inicio";


function App() {
  return (
    <BrowserRouter>

      <Routes>
        <Route path="/" element={<Root></Root>}>
          <Route path="/" element={<Inicio></Inicio>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
