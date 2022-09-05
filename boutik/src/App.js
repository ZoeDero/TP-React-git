
import './App.css';
import HomeScreen from './pages/home/HomeScreen';
import 'bootstrap/dist/js/bootstrap.bundle';
import 'bootstrap/dist/css/bootstrap.min.css';
import ContactForm from './components/contact/ContactForm';

function App() {
  return (
    <div>
        <HomeScreen/>
        <ContactForm/>
    </div>
  );
}

export default App;
