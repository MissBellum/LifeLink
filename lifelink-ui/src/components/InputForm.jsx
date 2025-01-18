import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

function InputForm() {

  const [inputText, setInputText] = useState("");

  // test function
  function handleInputChange(e) {
    setInputText(e.target.value);
  }

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      const response = await fetch('http://127.0.0.1:8000/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ message: inputText }),
      });

      const data = await response.json();
      console.log('Chatbot response:', data); 

    } catch (error) {
      console.error('Error sending message to backend:', error);
    }

    setInputText('');
  };
  

  return (
    <div className="flex justify-center items-center w-full">
      <form method="POST" onSubmit={ handleSubmit } action="" className="w-full max-w-2xl">
        <div className="home__prompt__div flex items-center bg-white rounded-full shadow-lg p-3 mt-10 w-full">
          <input
            id="home-prompt"
            className="home__prompt flex-grow rounded-l-full px-6 py-2 text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#ff6200] placeholder-gray-400"
            type="text"
            placeholder="Message"
            value={ inputText }
            onChange={ handleInputChange }
          />
          <div className="pr-5">
            <button
              type="submit"
              className="home__submit__icon bg-[#ff6200] hover:bg-[#e65500] text-white w-12 h-10 rounded-full ml-2 transition duration-300 ease-in-out transform hover:scale-105"
            >
              <FontAwesomeIcon size="xl" icon={faArrowRight} />
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default InputForm;
