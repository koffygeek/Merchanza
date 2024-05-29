import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header.jsx";

export default function App() {
  return (
    <main className="text-tertiary">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route />
        </Routes>
      </BrowserRouter>
    </main>
  );
}
