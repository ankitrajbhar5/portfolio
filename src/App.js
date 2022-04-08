import './App.css';
import Navbar from './Components/Navbar/Navbar,';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './Components/Footer/Footer';
import HomePage from './Pages/Home/HomePage';
import AboutPage from './Pages/About/AboutPage';
import SkillsPage from './Pages/Skills/SkillsPage';
import ProjectsPage from './Pages/Projects/ProjectsPage';
import ContactPage from './Pages/Contact/ContactPage';



function App() {
  return (
    <div className="App">
      <Navbar />


      <HomePage />

      <AboutPage />

      <SkillsPage />
      <ProjectsPage />
      <ContactPage />
      <Footer />

    </div>
  );
}

export default App;