import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function InputForm() {
    return (
        <div className="prompt-div">
            <input id="prompt" className="promptInput" type="text" placeholder="Message" />
            <div>
                <button className='prompt-submit' type='button'>
                <FontAwesomeIcon icon="fa-solid fa-arrow-right" />
                </button>
            </div>
        </div>
    )
}

export default InputForm;
