import InputForm from "./components/InputForm";


function App(props) {
  return (
    <div className="app">
      <div>
        <header className="app-header">
          <h1>Welcome to LifeLink. How can I help?</h1>
        </header>
      </div>
      
      <div>
        <InputForm />
      </div>
    </div>

  );
}

export default App;
