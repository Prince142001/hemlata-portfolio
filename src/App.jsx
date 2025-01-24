import "./App.css";
import HeroSection from "./components/HeroSection/HeroSection";
import AboutSection from "./components/AboutSection/AboutSection";
import WorkSamples from "./components/WorkSamples/WorkSamples";

function App() {
  return (
    <>
      <main>
        <HeroSection />
        <AboutSection />
        <WorkSamples />
      </main>
    </>
  );
}

export default App;
