import NavBar from "./components/NavBar";
import Admin from "./pages/Admin";

export default function App() {
  return (
    <main className="bg-primary text-tertiary">
      <div className="mx-auto max-w-[1500px] ">
        <NavBar />
        <Admin />
      </div>
    </main>
  );
}
