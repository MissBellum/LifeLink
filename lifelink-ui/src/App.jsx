import React from "react";
import InputForm from "./components/InputForm";
import Options from "./components/Options";

function App({ options }) {
  return (
    <div className="app bg-white min-h-screen flex flex-col overflow-hidden">
      <div className="app__header">
        <header className="header__text text-center text-3xl font-extrabold text-white py-3 px-6 relative">
          <span className="absolute inset-0 bg-gradient-to-r from-[#ff6200] to-[#e65500] opacity-30 rounded-full"></span>
          <h1 className="relative z-10 text-white tracking-wide text-shadow-md">
            LifeLink
          </h1>
        </header>
      </div>


      <main className="flex-grow py-4 px-4 overflow-y-auto">
        <div className="max-w-4xl mx-auto">
          <div className="home__content text-center mb-8">
            <h2 className="text-2xl font-semibold text-gray-800">
              Welcome to LifeLink. How can I help?
            </h2>
          </div>

          <section className="options__section mb-8">
            <Options options={options} />
          </section>

          <section className="mt-8">
            <InputForm />
          </section>
        </div>
      </main>

      <footer className="bg-white-0 text-center py-1 shadow-inner">
        <p className="text-gray-100 text-sm">
          © 2024 LifeLink. All rights reserved.
        </p>
      </footer>
    </div>
  );
}

export default App;
