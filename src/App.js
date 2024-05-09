import { useState } from 'react';
import { englishLocales } from './locales/eng';
import { russianLocales } from './locales/rus';
import { NavBar } from './components/NavBar';
import { Banner } from './components/Banner';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { Contacts } from './components/Contacts';
import { Footer } from './components/Footer';
import './App.scss';
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  const [language, setLanguage] = useState(russianLocales);

  const handleLanguage = () => {
    if (language === russianLocales) {
      setLanguage(englishLocales)
    } else {
      setLanguage(russianLocales)
    }
  };

  return (
    <div className="App">
      <NavBar language={language} handleLanguage={handleLanguage}/>
      <Banner language={language}/>
      <Skills language={language}/>
      <Projects language={language}/>
      <Contacts language={language}/>
      <Footer/>
    </div>
  );
}

export default App;
