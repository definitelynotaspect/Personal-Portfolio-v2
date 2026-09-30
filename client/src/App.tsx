// Style note: Quiet Terminal shell — warm editorial surfaces, asymmetric structure, precise mono metadata, and a restrained burnt-sampaguita signal.
import Home from "./pages/Home";
import About from "./pages/About";
import Credentials from "./pages/Credentials";
import Projects from "./pages/Projects";
import { useLocation } from "wouter";

export default function App() {
  const [location] = useLocation();
  if (location === "/about") return <About />;
  if (location === "/credentials") return <Credentials />;
  if (location === "/projects") return <Projects />;
  return <Home />;
}
