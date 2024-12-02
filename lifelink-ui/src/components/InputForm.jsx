import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

function InputForm() {
  return (
    <div className="flex justify-center items-center w-full">
      <form method="POST" action="" className="w-full max-w-2xl">
        <div className="home__prompt__div flex items-center bg-white rounded-full shadow-lg mt-10 p-3 w-full">
          <input
            id="home-prompt"
            className="home__prompt flex-grow rounded-l-full px-6 py-2 text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#ff6200] placeholder-gray-400"
            type="text"
            placeholder="Message"
          />
          <div className="pr-5">
            <button
              type="submit"
              className="home__submit__icon bg-[#ff6200] hover:bg-[#e65500] text-white w-12 h-10 rounded-full ml-2 transition duration-300 ease-in-out transform hover:scale-105"
            >
              <FontAwesomeIcon size="lg" icon={faArrowRight} />
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default InputForm;
