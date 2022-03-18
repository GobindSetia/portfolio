import './App.css'
import { Navbar } from './components/Navbar'
import { Home } from './components/MainSection'
import { About } from './components/About'
import { Contact } from './components/Contact'
import { Projects } from './components/Projects'
import { Footer } from './components/Footer'
import { typeWriter } from './utils/typewriter';

setInterval(typeWriter,100);
function App() {
  return (
    <div className="App">
      <Navbar/>
      <Home/>
      <About/>
      <Projects/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
