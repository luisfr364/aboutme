import Header from "./sections/Header/Header.tsx";
import AboutSection from "./sections/AboutSection/AboutSection.tsx";
import ContactSection from "./sections/ContactSection/ContactSection.tsx";
import ProjectsSection from "./sections/ProjectsSection/ProjectsSection.tsx";
import StackNCodeSection from "./sections/StackNCodeSection/StackNCodeSection.tsx";

function App() {
  return (
    <>
      <Header />
      <AboutSection />
      <StackNCodeSection />
      <ProjectsSection />
      <ContactSection />
    </>
  );
}

export default App;
