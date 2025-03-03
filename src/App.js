import './App.css';
const api = {
  key: "44502fc60dbbececfb2a2a52f202564e",
  base: "https://api.openweathermap.org/data/2.5/"
}

function App() {
  return (
    <div className="App">
      <main>
        <div className="search-box">
          <input 
            type="text"
            className="search-bar"
            placeholder="Search..."
            
          />
        </div>
        </main>
      
    </div>
  );
}

export default App;
