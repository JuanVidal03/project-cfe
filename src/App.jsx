import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Landing from "./views/landing/Index";

const queryClient = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landing/>}/>
          <Route path="*" element={<h1>Ruta no existe</h1>}/>
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  );
};

export default App;
