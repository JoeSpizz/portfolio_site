
import './index.scss';
import Title from './components/Title';
import Bio from './components/Bio';
import Projects from './components/Projects';
import Footer from './components/Footer'

function App() {
  return (
    <div className="App">
     <Title/>
     <Projects/>
     <Bio/>
     <Footer/>
       
    </div>
  );
}

export default App;
