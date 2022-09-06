
import './App.css';
import HomeScreen from './pages/home/HomeScreen';
import 'bootstrap/dist/js/bootstrap.bundle';
import 'bootstrap/dist/css/bootstrap.min.css';
import ContactForm from './components/contact/ContactForm';
import { useState } from 'react';

function App() {

  const [isDark, setIsDark] = useState(false);


  return (
    <div className={isDark? "bg-dark text-light" : "bg-light text-dark" }>
        <HomeScreen/>
        <ContactForm/>
    </div>
  );
}

export default App;
