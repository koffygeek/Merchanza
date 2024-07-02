import NavBar from "./components/NavBar";
import Admin from "./pages/Admin";

export default function App() {
  return (
    <main className="bg">
      <div>
        <NavBar />
        <Admin />
      </div>
    </main>
  );
}
