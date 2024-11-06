import React from "react";
import InputForm from "./components/InputForm";
import Options from "./components/Options";

function App({ options }) {
  
  return (
    <div className="app">
      <div className="app__header">
        <header className="header__text">
          {/* LifeLink */}
        </header>
      </div>

      <main>
        <div>
            <div className="home__content">
              <h2>Welcome to LifeLink. How can I help?</h2>
            </div>
            
            <section className="options__section">
              <Options options={ options } />
            </section>

            <section>
              <InputForm />
            </section>
        </div>
      </main>

    </div>

  );
}

export default App;
