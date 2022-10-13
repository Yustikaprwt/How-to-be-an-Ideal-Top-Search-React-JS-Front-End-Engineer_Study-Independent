import logo from './star.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header" >
      <style>
      @import url('https://fonts.googleapis.com/css2?family=Source+Serif+Pro&display=swap');
      </style>
        <img src={logo} className="App-logo" alt="logo" />
        
        <p>
          Selamat Datang di Website Yustika Perwita Sari
        </p>
        <a
          className="Link"
          href="https://github.com/Yustikaprwt/React_Yustika-Perwita-Sari"
          target="_blank"
          rel="noopener noreferrer"
        >
          Github Saya
        </a>
      </header>
    </div>
  );
}

export default App;
