import InputForm from "./components/InputForm";


function App(props) {
  return (
    <div className="app">
      <div className="app__header">
        <header className="header__text">
          LifeLink
        </header>
      </div>

      <div>
        <main>
            <div className="home__content">
              <h2>Welcome to LifeLink. How can I help?</h2>
              
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
