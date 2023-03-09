import './App.css';
import Home from './views/Home';
import Contact from './views/Contact';
import Projects from './views/Projects';
import ErrorPage from './views/ErrorPage';
import { Routes } from 'react-router-dom';
import { Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import ProjectsApps from './components/ProjectsApps';
import ProjectsGames from './components/ProjectsGames';



function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="contact" element={<Contact/>}></Route>
        <Route path="projects" element={<Projects/>}>
          <Route path="games" element={<ProjectsGames />} />
          <Route path="apps" element={<ProjectsApps />} />
        </Route>
        <Route path="*" element={<ErrorPage/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
