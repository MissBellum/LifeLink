import InputForm from "./components/InputForm";


function App(props) {
  return (
    <div className="app">
      <div className="app-header">
        <header className="header-text">
          LifeLink
        </header>
      </div>

      <div>
        <main>
            <div className="page-content">
              <h1>Welcome to LifeLink. How can I help?</h1>
            </div>
            
            <div>
              <InputForm />
            </div>
        </main>
      </div>

    </div>

  );
}

export default App;
